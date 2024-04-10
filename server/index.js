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

app.get('/api/auth', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Users')
        res.status(200).send({success: true, result: result});
    } catch(e) {
        res.status(500).send({message: "Internal Server Error", error: e});
    }
});

app.get('/api/inventory', async (req, res) => {
    try{
        const invReturn = await pool.query('SELECT * FROM items')
        res.status(200).send({success: true, result: invReturn});
    }
    catch(e){
        res.status(500).send({message: "Internal Server Error - Could not get inventory", error: e});
    }
});

app.get('/api/orders', async (req, res) => {
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
