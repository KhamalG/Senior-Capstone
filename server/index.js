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
  host:"",
  user: 'root',
  password: '',
  database: ''
}).promise()

app.get('/api/auth', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Users')
        res.status(200).send({success: true, result: result});
    } catch(e) {
        res.status(500).send({message: "Internal Server Error", error: e});
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))