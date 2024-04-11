require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const moment = require('moment');
const mysql = require('mysql2');
const config = require('./credentials');

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host:'localhost',
  user: 'drive5',
  password: 'delivery',
  database: 'drive5'
}).promise()

//Login API
app.post('/api/auth', async (req, res) => {
    try {
        //Getting query data from login page and retreiving from database
        var user = await pool.query(`SELECT username FROM Users WHERE username LIKE '${req.body.username}'`);
        var savedPassword = await pool.query(`SELECT password FROM Users WHERE username LIKE '${req.body.username}'`);
        user = user[0][0].username; //Query returned double arrays, had to process
        savedPassword = savedPassword[0][0].password; //same here.

        //Comparing username
        if(!user) {
            return res.status(401).send({message: "Invalid username or password"});
        }
        if(req.body.password ===  savedPassword) {
            res.status(200).send({user: user, message: "Login Successful!"})
        } else {
            return res.status(401).send({message: "Invalid username or password"});
        }
    } catch(e) {
        res.status(500).send({message: "Internal Server Error", error: e});
    }
});

// Inventory API
app.post('/api/inventory', async (req, res) => {
    try{
        const invReturn = await pool.query('SELECT * FROM items')
        res.status(200).send({success: true, result: invReturn});
    }
    catch(e){
        res.status(500).send({message: "Internal Server Error - Could not get inventory", error: e});
    }
});

// Order page API
app.post('/api/orders', async (req, res) => {
    try{
        const orderReturn = await pool.query('SELECT * FROM orders')
        res.status(200).send({success: true, result: orderReturn});
    }
    catch(e){
        res.status(500).send({message: "Internal Server Error - Could not get orders", error: e});
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))
