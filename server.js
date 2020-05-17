const express = require('express');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const upload = multer({});

app.use(morgan('dev'));
app.use(express.json());
app.post('/upload', (req, res) => {
  console.log(req.body)
  res.end()
})
app.post('/resume', upload.any(), (req, res) => {
    fs.writeFileSync(
    path.join(__dirname, 'Resumes','Mark_Go_Resume.pdf'),
    req.files[0].buffer,
    'binary'
  );
  res.end()
})

app.post('/scheduleTime', (req, res) => {
  console.log(req.body);
  res.end()
})

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, console.log(`App is listening on port ${port}`))
