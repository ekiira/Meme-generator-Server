
//Load express module with `require` directive
const express = require('express');
const app = express();
const Meme =  require('../models/meme');


//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get()

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})

// const testing = {
//     sayHello: () => {
//         return 'Hello'
//     },
//     addNumbers: (x, y) => {
//         return x + y
//     }
// }

module.exports = app;