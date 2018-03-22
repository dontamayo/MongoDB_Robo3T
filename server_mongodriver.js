const { MongoClient } = require('mongoDB');

const url = 'mongodb://localhost:27017/test';








//========= INCREMENT =================//

// MongoClient.connect(url,(err,db) => {
//
// db.collection('Cars').findOneAndUpdate({
//     name: 'Monica'
//   },
//   //change and update the lastname
//   {
//     $set: {
//       lastname: 'Tamayo'
//     },
//     $inc: {
//       age:+2
//     }
//   }, {
//     upsert:true,
//     returnOriginal: true
//   },
//   (err, doc) => {
//     console.log(doc)
//   }
// )
// db.close();
// })




//=========upsert =================//

// MongoClient.connect(url,(err,db) => {
//
// db.collection('Cars').findOneAndUpdate({
//     name: 'Monica'
//   },
//   //change and update the lastname
//   {
//     $set: {
//       lastname: 'Mawuntu'
//     }
//   }, {
//     upsert:true,
//     returnOriginal: true
//   },
//   (err, doc) => {
//     console.log(doc)
//   }
// )
// db.close();
// })









//=========== UPDATE ========================//

// MongoClient.connect(url,(err,db) => {
//
// db.collection('Cars').findOneAndUpdate({
//     name: 'Don'
//   },
//   //change and update the lastname
//   {
//     $set: {
//       lastname: 'RightNow'
//     }
//   }, {
//     returnOriginal: true
//   },
//   (err, doc) => {
//     console.log(doc)
//   }
// )
// db.close();
// })
//=========FIND ONE TO MANY ===================//
// MongoClient.connect(url,(err,db) => {
//
// db.collection('Cars').findOneAndDelete({model:'Camaro'},(err,doc)=>{
//   console.log(doc)
// })
// db.close();
// })

//==========DELETE ONE PROMISE =================//
// MongoClient.connect(url,(err,db) => {
//
// db.collection('Cars').deleteOne({model:'Acura MDX'},(err,doc)=>{
//   console.log(doc)
// })
// db.close();
// })



//==========DELETE MANY CALLBACK=================//
//   MongoClient.connect(url,(err,db) => {
//
//   db.collection('Cars').deleteMany({year:2010},(err,doc)=>{
//     console.log(doc)
//   })
//   db.close();
// })




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






//=====sample  1 ADDING ============//

// const cars = [
//   {model:"Mercedes", year:2020},
//   {model:"Lexus GS", year:2021},
//   {model:"Honda Civic Type R", year:2022}
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
