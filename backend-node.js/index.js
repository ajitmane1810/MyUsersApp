const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodeBootCamp"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});



// Get all users
app.get('/users', (req, res) => {
    let query = "SELECT * FROM users";
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});




// Add a new user
app.post('/adduser', (req, res) => {
    let { username, email, password, first_name, last_name, address, phone_number, role, salary } = req.body;

    let query = `
        INSERT INTO users (username, email, password, first_name, last_name, address, phone_number, role, salary)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [username, email, password, first_name, last_name, address, phone_number, role, salary], (err, results) => {
        if (err) throw err;
        res.json({ "msg": "User added successfully" });
    });
});



// Get user by ID
app.get('/user/:id', (req, res) => {
    let query = "SELECT * FROM users WHERE id = ?";
    db.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});





// Update user by ID (update all fields)
app.put('/updateUser/:id', (req, res) => {
    let { username, email, password, first_name, last_name, address, phone_number, role, salary } = req.body;

    let query = `
        UPDATE users SET 
        username = ?, 
        email = ?, 
        password = ?, 
        first_name = ?, 
        last_name = ?, 
        address = ?, 
        phone_number = ?,    -- Added phone number update
        role = ?, 
        salary = ? 
        WHERE id = ?
    `;

    db.query(query, [username, email, password, first_name, last_name, address, phone_number, role, salary, req.params.id], (err, results) => {
        if (err) throw err;
        if (results.affectedRows > 0) {
            res.json({ "msg": "User updated successfully" });
        } else {
            res.status(404).json({ "msg": "User not found" });
        }
    });
});





// Delete user by ID
app.delete('/deleteUser/:id', (req, res) => {
    let query = "DELETE FROM users WHERE id = ?";
    db.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        if (results.affectedRows > 0) {
            res.json({ "msg": "User deleted successfully" });
        } else {
            res.status(404).json({ "msg": "User not found" });
        }
    });
});




// Delete all users
app.delete('/deleteAllUsers', async (req, res) => {
    try {
        let query = 'DELETE FROM users';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error deleting all users:', err);
                return res.status(500).json({ msg: 'Internal server error' });
            }
            res.json({ msg: 'All users deleted successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});

app.listen(3001, () => console.log("Server started"));
