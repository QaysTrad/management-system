let mongoose = require('mongoose') // Import mongoose module

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mange', { useNewUrlParser: true })

// This is to connect the backend to an external DB hosted on https://mlab.com/
// mongoose.connect('mongodb://qays:qays123@ds129670.mlab.com:29670/donate')
let db = mongoose.connection // Create mongoose connection for mongodb

db.on('error', function () {
  console.log('mongoose connection error')
}) // This will apply if there is a problem on mongoose connection for mongodb
db.once('open', function () {
  console.log('mongoose connected successfully')
}) // This will apply if mongoose is connected successfully for mongodb

let Schema = mongoose.Schema // Create a mongoose schema

let equipmentSchema = new Schema({
  name: { type: String, required: true},
  serialNumber : {type: Number, required: true},
  attachment : {type: String}
})

let employeesSchema = new Schema({
  id: {type: Number , required: true},
  name : {type: String},
  nationality : {type: String},
  jobTitle : {type: String}
})

let projectsSchema = new Schema({
  id: {type: Number},
  name: {type: String},
  type: {type: String},
  fromDate: {type: Date},
  toDate: {type: Date}
})

equipmentSchema = mongoose.model('equipmentSchema', equipmentSchema)
employeesSchema = mongoose.model('employeesSchema', employeesSchema)
projectsSchema = mongoose.model('projectsSchema', projectsSchema)

module.exports.employeesSchema = employeesSchema;
module.exports.equipmentSchema = equipmentSchema;
module.exports.projectsSchema = projectsSchema;

