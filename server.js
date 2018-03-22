const mongoose = require('mongoose');

// mongoose - you dont need to connect and reconnect all the time, connection always live
mongoose.connect('mongodb://localhost:27017/test')
mongoose.Promise = global.Promise;

const carSchema = mongoose.Schema({
  // brand:'',
  // model:'',
  // year:'',
  // color:''

  brand:String,
  model:String,
  year:Number,
  color:String,
  avail:Boolean
});

  const Car = mongoose.model('Car', carSchema);

//=======Add Car ========================//
//   const addCar = new Car({
//     brand:'Toyota',
//     model:'Corolla',
//     year:2014,
//     color:'white',
//     avail:'true'
//   }
// )
//
//   addCar.save((err,doc) => {
//     if(err)
//     return  console.log(err);
//     console.log(doc)
//   })


//=======Find Car ========================//

// Car.find((err, doc) => {
//   if(err) return console.log(err);
//   console.log(doc)
// })

//=======Find Car Specific and iD========================//

// Car.find({_id:'5ab41e114a926e487dfd1c0a'},(err, doc) => {
//   if(err) return console.log(err);
//   console.log(doc)
// })



//=======FindOne Car Specific========================//
// Car.findOne({brand:'Lexus'},(err, doc) => {
//   if(err) return console.log(err);
//   console.log(doc)
// })



//=======FindById Car ID========================//

// Car.findById("5ab41e114a926e487dfd1c0a",(err, doc) => {
//   if(err) return console.log(err);
//   console.log(doc)
// })




//=======FindByIdAndRemove Car ID========================//

// Car.FindByIdAndRemove("5ab41e114a926e487dfd1c0a",(err, doc) => {
//   if(err) return console.log(err);
//   console.log(doc)
// })



//=======DELETE findOneAndRemove ========================//

// Car.findOneAndRemove({brand:'Lexus'},(err, doc) => {
//   if(err) return console.log(err);
//   console.log(doc)
//   console.log("removed")
// })





//=======REMOVE ========================//

// Car.remove({year:2025},(err, doc) => {
//   if(err) return console.log(err);
//   console.log(doc)
//   console.log("removed")
// })
//

//========REMOVE THE WHOLE DATABASE WIPEOUT=============//

// Car.remove({},(err, doc) => {
//   if(err) return console.log(err);
//   console.log(doc)
//   console.log("removed")
// })

//========UPDATE  =============//

// 5ab42d5dfdac584c01d57268

// Car.update({_id:"5ab42d5dfdac584c01d57268"},
//   { $set:{ brand:"Nissan"}},
//   (err,doc)=>{
//     if(err) return console.log(err);
//   }
// )

//========FIND ID AND UPDATE but return the old name =============//

// 5ab42d5dfdac584c01d57268

// Car.findByIdAndUpdate("5ab42d5dfdac584c01d57268",
//   {$set: {brand:"Honda"}},
//   {new: false },
//     (err,doc)=>{
//       if(err) return console.log(err);
//       console.log(doc)
//     }
//   )

//========find by ID   =============//
Car.findById("5ab42d5dfdac584c01d57268"),(err, car) => {
  if(err) return console.log(err);

  car.set({
    brand: "Acura"
  });
  car.save((err,doc) =>{
    if(err) return console.log(err);
    console.log(doc)
  })
}
