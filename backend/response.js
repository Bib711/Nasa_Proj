import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import mysql from 'mysql2/promise';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3010;

// Setup Google Generative AI client
const genAI = new GoogleGenerativeAI('AIzaSyBQwuqTDSSORfa7d_HeHrpc5Qv8CQMLGeo');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'user',
  password: 'bibin123'
});

async function getGenerativeResponse(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}

app.post('/evaluate-answers', async (req, res) => {
  console.log('Received request body:', req.body);
  const answers = req.body.answers;
  const username = req.body.username; // Ensure this is sent from the frontend

  console.log('Received answers:', answers);
  console.log('Username:', username);

  try {
    // Prepare prompts for evaluation
    const prompts = [];
    for (const [index, answer] of answers.entries()) {
      if (answer && answer.question && answer.answer) {
        const prompt = `Evaluate the following question and answer. 
                        Question: ${answer.question}
                        Answer: ${answer.answer}
                        Rate the accuracy of the answer on a scale of 1 to 100.`;
        prompts.push(prompt);
      } else {
        console.error(`Invalid data for question ${index + 1}`);
      }
    }

    // Fetch completions from Google Generative AI
    const scores = await Promise.all(prompts.map(prompt => getGenerativeResponse(prompt)));

    // Process the scores and generate the response
    const results = {};
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i]?.trim() || '0';  // Adjust based on actual API response format
      const questionKey = `question${i + 1}`;
      results[questionKey] = {
        question: answers[i]?.question || 'No question',
        score: parseInt(score, 10) || 0
      };
      
      // Insert or update the scores in the database
      const connection = await pool.getConnection();
      await connection.query(
        'INSERT INTO user_data (username, marks) VALUES (?, ?) ON DUPLICATE KEY UPDATE marks = VALUES(marks)',
        [username, results[questionKey].score]
      );
      connection.release();
    }

    // Send the response
    res.json(results);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
