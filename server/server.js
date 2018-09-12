const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use(express.static(path.join(__dirname, '../angular-client/dist/angular-client')))

app.post('/addEquip' , function(req , res) {
	let name = req.body.name;
	let serialNumber = req.body.serialNumber;

	let equip =new db.equipmentSchema({
		name: name,
		serialNumber: serialNumber
	});
	equip.save(function (err, data) { 
        if (err) {
            throw err; 
        } else {
            console.log('saved!'); 
        }
    });
})

app.get('/getEquip', function (req,res) {
	db.equipmentSchema.find({}, function (err, data) {
		if(err){
			throw err;
		}else{
			res.send(data);
		}
	})
})


app.get('/*', function (req , res) {
	res.sendFile(path.resolve(path.join(__dirname,'../angular-client/dist/angular-client/index.html')))
})

var port= 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));