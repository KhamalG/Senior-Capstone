require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const moment = require('moment');
const Connection = require('tedious').Connection;
const config = require('./credentials');

app.use(express.json());
app.use(cors());

const connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
    console.log("Connected");   
});  

connection.connect((err) => {
    if (err) {
      console.log('connection err');
      throw err;
    }
  
    getUsers();
  });

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;

function getUsers() {
    const sql = 'SELECT * FROM Users';
    const request = new Request(sql, (err, rowCount) => {
        if (err) {
            throw err
        }
        console.log('new Request cb');
        beginTransaction();
    });
    connection.execSql(request);
}

function beginTransaction() {
    connection.beginTransaction((err) => {
      if (err) {
        // If error in begin transaction, roll back!
        rollbackTransaction(err);
      } else {
        console.log('beginTransaction() done');
        // If no error, commit transaction!
        commitTransaction();
      }
    });
  }

function commitTransaction() {
    connection.commitTransaction((err) => {
        if (err) {
        console.log('commit transaction err: ', err);
        }
        console.log('commitTransaction() done!');
        console.log('DONE!');
        connection.close();
    });
}

app.get('/api/auth', async (req, res) => {
    try {
        const result = getUsers();
        res.status(200).send({success: true, result: result});
    } catch(e) {
        res.status(500).send({message: "Internal Server Error", error: e});
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))