// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,db) => {
  if(error) { return console.log('Connection to database failed')}
  console.log('Connected to mongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {return console.log('Unable to isert todo',err)}
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  db.collection('Users').insertOne({
    name: 'Atharva Kale',
    age: 23,
    location: 'Los Angeles',
  }, (err, result) => {
    if(err) {return console.log('Unable to isert todo',err)}
    console.log(JSON.stringify(result, undefined, 2))
  });

  db.close();
});