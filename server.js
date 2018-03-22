const { MongoClient } = require('mongoDB');

const url = 'mongodb://localhost:27017/test';





//==========DELETE MANY =================//
ongoClient.connect(url,(err,db) => {
  db.collection('Cars').findOne({year:2010},(err,doc) => {
    console.log(doc)
  })

  db.close();
})









//======finding ONE ==========//

// MongoClient.connect(url,(err,db) => {
//   db.collection('Cars').findOne({year:2010},(err,doc) => {
//     console.log(doc)
//   })
//
//   db.close();
// })

//=======finding the selected year of car and information =========//

// MongoClient.connect(url,(err,db)=> {
//   db.collection('Cars').find({year:2020})
//   .toArray()
//   .then(data => {
//     console.log(data)
//   });
//   db.close();
// })




//=====sample 2 ========//

// MongoClient.connect(url,(err,db)=> {
//   db.collection('Cars').find()
//   .skip(1)
//   .limit(1)
//   .sort({"_id":-1})
//   .toArray()
//   .then(data => {
//     console.log(data)
//   });
//   db.close();
// })






//=====sapmle 1 ============//

// const cars = [
//   {model:"Dodge Ram", year:2017},
//   {model:"BMW", year:2010},
//   {model:"Subaru WRX STI", year:2020},
//
//
// ]
//
// MongoClient.connect(url,(err,db) => {
//   db.collection('Cars').insertMany(cars,(err,res) => {
//     if(err){
//       return console.log(`Cannot insert: $(err)`)
//     }
//     console.log(res.ops)
//     //console.log(res.ops[0]._id.getTimestamp()) //getting timestamp
//   })
//   db.close();
// })
