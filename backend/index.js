const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors())

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '54586',
    database: 'user_address_db'
});

connection.connect(err => {
    if (err) {
        return console.error('Error connecting to MySQL:', err);
    }
    console.log('Connected to MySQL');
});

// User Registration Endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    connection.query(
        'INSERT INTO User (username, password) VALUES (?, ?)',
        [username, password],
        (error, results) => {
            if (error) {
                return res.status(500).send(error);
            }
            res.status(201).json({ id: results.insertId, username });
        }
    );
});


app.post('/address', (req, res) => {
    const { user_id, street, city, state, zip_code } = req.body;
    connection.query(
        'INSERT INTO Address (user_id, street, city, state, zip_code) VALUES (?, ?, ?, ?, ?)',
        [user_id, street, city, state, zip_code],
        (error, results) => {
            if (error) {
                return res.status(500).send(error);
            }
            res.status(201).json({ id: results.insertId });
        }
    );
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
