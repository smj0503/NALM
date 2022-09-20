const express = require('express');
const app = express();
const path = require('path');

// DB
// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'nalm',
//   password : 'smjcau2017!',
//   database : 'nalm'
// });
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '35.78.108.250',
  user     : 'smj_nalm',
  password : 'smjcau2017!',
  database : 'nalm'
});

// React와 연동
app.use(express.json());
const cors = require('cors');
app.use(cors());

// 서버 접속 확인
app.listen(8080, ()=>{
  console.log('listening on 8080')
});

connection.connect((err)=>{
  if (err) throw err;
  console.log('Connected!');
});

app.get('/data', (req, res)=>{
  const sql = "select * from restaurant"
  connection.query(sql, (err, result, fields)=>{
    if (err) throw err;
    res.json(result);
  });
});

// Routing
app.use(express.static(path.join(__dirname, 'nalm/build')));

// app.get('/', (req, res)=>{
//   res.sendFile(path.join(__dirname, '/nalm/build/index.html'));
// });

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/nalm/build/index.html'));
});