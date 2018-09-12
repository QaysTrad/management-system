const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../angular-client/dist/angular-client')))

app.post('/addEquip', (req, res) => {
	let name = req.body.name;
	let serialNumber = req.body.serialNumber;

	let equip = new db.equipmentSchema({
		name: name,
		serialNumber: serialNumber
	});
	equip.save((err, data) => {
		if (err) {
			throw err;
		} else {
			console.log('saved!');
		}
	});
})

app.post('/deleteEquip', (req, res) => {
	id = req.body.id;
	db.equipmentSchema.findOneAndRemove({_id:id},(err, data)=>{
		if(err){
			throw err;
		}else{
            res.sendStatus(200);
		}
	})
})
app.get('/getEquip', (req, res) => {
	db.equipmentSchema.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			res.send(data);
		}
	})
})


app.get('/*', function (req, res) {
	res.sendFile(path.resolve(path.join(__dirname, '../angular-client/dist/angular-client/index.html')))
})

var port = 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));