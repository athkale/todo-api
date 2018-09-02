// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,db) => {
  if(error) { return console.log('Connection to database failed')}
  console.log('Connected to mongoDB server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b8c2757a5fe46ca48723a6d')},
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }).then((result) => {
  //       console.log(result)
  // });

  db.collection('Users').findOneAndUpdate({name: 'Jenna'},{
    $set: {
      name: 'Atharva'
    },
    $inc: {
      age: 1
    }
  }).then((result) => {
    console.log(result)
  });
  db.close();
});