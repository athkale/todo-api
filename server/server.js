let mongoose = require('./db/mongoose');
let {Todo} = require('./models/Todo');
let {User} = require('./models/User');

const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.post('/todos',(req, res) => {
  // console.log(req.body);
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc)
  }, (err) => {
    res.status(400);
    res.send(err)
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});