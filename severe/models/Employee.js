// const mongoose = require('mongoose');

// const employeeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         requried: true
//     },
//     email: {
//         type: String,
//         requried: true

//     },
//     team: {
//         type: String,
//         requried: true
//     },
//     firebaseUid: {
//          type: String 
//     },
//     // projects:{
//     //     type: String,
//     //     requried: true

//     // }

// })

// module.exports = mongoose.model('Employees', employeeSchema);



const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  team: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
