const { MongoClient } = require('mongoDB');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url,(err,db) => {
//   if(err){
//     console.log('could not connect');
//   }
//   console.log('connected !!!')
//   db.close();
// })

MongoClient.connect(url,(err,db) => {
  db.collection('Cars').insertOne({
    _id:75,
    model:'Subaru WRX STI',
    year:2019
  },(err,res) => {
    if(err){
      return console.log(`Cannot insert: $(err)`)
    }
    console.log(res.ops)
    //console.log(res.ops[0]._id.getTimestamp()) //getting timestamp
  })
  db.close();
})
