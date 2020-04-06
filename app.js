/* eslint-disable no-console */

const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Meme = require('./models/meme');

dotenv.config();

// console.log('process----->>>>>', process.env.NODE_ENV, process.env.NODE_ENV.toString() == 'test')

const env = process.env.NODE_ENV || 'development';
const envMap = {
  test: 'mongodb://localhost:27017/meme-generator-test',
  development: 'mongodb://localhost:27017/meme-generator',
  production: 'mongodb://localhost:27017/meme-generator-prod',
};
console.log('env--->>>', env);
const databaseUrl = envMap[env];

console.log('databaseurl ---->>>', databaseUrl);
// process.exit()

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('homepage');
});

app.get('/view', (req, res) => {
  Meme.find({}, (err, allMemes) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(allMemes)
      res.send(allMemes);
    }
  });
});

app.post('/add', (req, res) => {
  const { caption } = req.body;
  const url = req.body.imgUrl;
  const upload = req.body.imgUpload;
  const newMemes = {
    caption,
    imageUrl: url,
    imageUpload: upload,
  };
  Meme.create(newMemes, (err, addMemes) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/view');
      console.log('this is the create page', addMemes);
    }
  });
});


app.listen(8080, () => {
  console.log('server has started!!');
});

module.exports = app;
