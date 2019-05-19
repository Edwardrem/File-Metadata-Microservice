'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fileController = require('./controllers/file.controller');

const app = express();
const upload = multer({ dest: `${__dirname}/public` });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res) {
  res.json({ greetings: 'Hello, API' });
});

app.post(
  '/api/fileanalyse',
  upload.single('upfile'),
  fileController.processFileData
);

app.listen(process.env.PORT || 3000, function() {
  console.log('Node.js listening ...');
});
