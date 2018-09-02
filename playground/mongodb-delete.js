// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,db) => {
  if(error) { return console.log('Connection to database failed')}
  console.log('Connected to mongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })
  // db.collection('Users').deleteMany({name: 'Atharva Kale'}).then((result) => {
  //   console.log(result)
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: '5b8c0db50f4af311a14778ff'}).then((result) => {
    console.log(result);
  });

  db.close();
});