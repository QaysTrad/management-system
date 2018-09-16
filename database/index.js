const mongoose = require('mongoose');
mongoose.connect('mongodb://qays:Qays1234@ds259802.mlab.com:59802/mange-system');

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

let Schema = mongoose.Schema; // Create a mongoose schema 

let equipmentSchema = new Schema({
  name: { type: String },
  serialNumber: { type: Number },
  attachment: { type: String }
})

let employeesSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  nationality: { type: String },
  jobTitle: { type: String }
})

let projectsSchema = new Schema({
  name: { type: String },
  type: { type: String },
  fromDate: { type: Date },
  toDate: { type: Date },
  employees: { type: String },
  equipment: { type: String }
})

equipmentSchema = mongoose.model('equipmentSchema', equipmentSchema);
employeesSchema = mongoose.model('employeesSchema', employeesSchema);
projectsSchema = mongoose.model('projectsSchema', projectsSchema);

module.exports.equipmentSchema = equipmentSchema;
module.exports.employeesSchema = employeesSchema;
module.exports.projectsSchema = projectsSchema;