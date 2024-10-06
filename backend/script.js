import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// Create express app
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());
// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost', // Your MySQL host (usually localhost)
  user: 'root',      // Your MySQL username
  password: 'bibin123',  // Your MySQL password
  database: 'user'   // The name of your MySQL database
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Handle GET request for user authentication
app.post('/auth', (req, res) => {
    const { username, password } = req.body; // Extract username and password from request body
    
    // Query to fetch the specific user from the 'users' table
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (error, results) => {
        if (error) {
            console.error('Error fetching user from the database:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }

        // Extract user data from the results
        const user = results[0];
        let user_type = null;

        // Check the user type based on the username
        switch (user.username) {
            case '24DR021':
                user_type = "MissileDash";
                break;
            case '24DR034':
                user_type = "NavalSystem";
                break;
            case '24DR067':
                user_type = 'LC';
                break;
            case 'admin':
                user_type = "admin1";
                break;
            default:
                res.status(401).json({ message: 'Invalid username or password' });
                return;
        }

        // Respond with the user type
        res.json({ type: user_type });
    });
});

// Listen on a specific port
const port = 4050;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
