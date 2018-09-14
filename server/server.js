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

app.post('/deteleEquip', (req, res) => {
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

app.post('/updateEquip', (req, res) => {
	let id = req.body.id
	let name = req.body.name;
	let serialNumber = req.body.serialNumber;

	  db.equipmentSchema.findOneAndUpdate({_id:id}, {$set: {
	  	name: name,
	  	serialNumber: serialNumber
	  }}, function (err) {
        if (err) {
            throw err;
        } 
    });
})

app.post('/addEmp', (req, res) => {
    const name = req.body.name;
    const nationality = req.body.nationality;
    const jobTitle = req.body.JobTitle

    const employ = new db.employeesSchema({
        name,
        nationality,
        jobTitle
    })
    employ.save((err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

app.post('/deleteEmploy',(req, res) => {
	const id = req.body.id;

    db.employeesSchema.findOneAndRemove({ _id: id }, (err, data) => {
        if (err) {
            throw err;
        }
        res.sendStatus(201);
    })
})

app.get('/getEmp',(req, res) => {
	db.employeesSchema.find({}, (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

app.post('/updateEmp', (req, res) => {
	const id = req.body.id;
    const name = req.body.name;
    const nationality = req.body.nationality;
    const jobTitle = req.body.JobTitle;

   	db.employeesSchema.findOneAndUpdate({_id:id}, {$set: {
   		name: name,
   		nationality: nationality,
   		jobTitle: jobTitle
	  }}, function (err) {
        if (err) {
            throw err;
        } 
    });
})

app.post('/addProject', (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const fromDate = req.body.from;
    const toDate = req.body.to;

    const proj = new db.projectsSchema({
        name,
        type,
        fromDate,
        toDate
    })
    proj.save((err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

app.get('/getProject', (req, res) => {
db.projectsSchema.find({}, (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

app.post('/updateProject', (req, res) => {
	const id = req.body.id;
	const name = req.body.name;
    const type = req.body.type;
    const fromDate = req.body.from;
    const toDate = req.body.to;

    db.projectsSchema.findOneAndUpdate({_id:id}, {$set: {
   		name: name,
   		nationality: nationality,
   		jobTitle: jobTitle
	  }}, function (err) {
        if (err) {
            throw err;
        } 
    });
})

app.post('/deletePro', (req, res) => {
	const id = req.body.id;
	
    db.projectsSchema.findOneAndRemove({ _id: id }, (err, data) => {
        if (err) {
            throw err;
        }
        res.sendStatus(201);
    })
})

app.get('/*', function (req, res) {
	res.sendFile(path.resolve(path.join(__dirname, '../angular-client/dist/angular-client/index.html')))
})

var port = 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));