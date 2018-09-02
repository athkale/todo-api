// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,db) => {
  if(error) { return console.log('Connection to database failed')}
  console.log('Connected to mongoDB server');
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch data',err)
  // });

  db.collection('Users').find({name: 'John'}).count().then((count) => {
    console.log(`Count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch data',err);
  });
  db.close();
});