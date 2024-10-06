// Import required modules
import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';
import crypto from 'crypto';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// Create an Express application

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // Change if you are using a different user
  password: 'bibin123',    // MySQL password
  database: 'user' // Replace with your actual database name
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database.');
  }
});
function generatePassword(prefix, length) {
    // Define the characters allowed in the password
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    const passwordLength = length - prefix.length; // Adjust length based on prefix
  
    let randomPassword = '';
    
    // Generate random characters for the password
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = crypto.randomInt(0, charset.length); // Secure random index
      randomPassword += charset[randomIndex];
    }
  
    // Return the final password with the prefix
    return `${prefix}${randomPassword}`;
  }
// Route to get user data and send it to the frontend
app.get('/admin/users', (req, res) => {
  const query = 'SELECT username, marks FROM user_data';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from the database:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results); // Send the data as JSON to the frontend
    }
  });
});

app.get("/admin/generation",() =>{
    const {length} = req.body;
    const username = generatePassword(user_,length);
    const password = generatePassword(pass_,length);
    const query = `INSERT INTO users (username, password)
                 VALUES (?, ?)`;

  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting/updating data:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'User data updated successfully' });
    }
  });
})
// Start the Express server
const port = 4080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});