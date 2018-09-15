const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../angular-client/dist/angular-client')))

//this function to add Equipment to the database
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

//this function to delete Equipment from the database by equipment id  
app.post('/deteleEquip', (req, res) => {
    id = req.body.id;

    db.equipmentSchema.findOneAndRemove({ _id: id }, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.sendStatus(200);
        }
    })
})

//this function to update on Equipment from the database by equipment id
app.post('/updateEquip', (req, res) => {
    let id = req.body.id
    let name = req.body.name;
    let serialNumber = req.body.serialNumber;

    db.equipmentSchema.findOneAndUpdate({ _id: id }, {
        $set: {
            name: name,
            serialNumber: serialNumber
        }
    }, function (err) {
        if (err) {
            throw err;
        }
    });
})

//this function to retreve data from the database to the front page 
app.get('/getEquip', (req, res) => {
    db.equipmentSchema.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    })
})

//this function to add Employees to the database
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

//this function to delete Emplyees from the database by employee id  
app.post('/deleteEmploy', (req, res) => {
    const id = req.body.id;

    db.employeesSchema.findOneAndRemove({ _id: id }, (err, data) => {
        if (err) {
            throw err;
        }
        res.sendStatus(201);
    })
})

//this function to update on Employees from the database by employee id
app.post('/updateEmp', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const nationality = req.body.nationality;
    const jobTitle = req.body.JobTitle;

    db.employeesSchema.findOneAndUpdate({ _id: id }, {
        $set: {
            name: name,
            nationality: nationality,
            jobTitle: jobTitle
        }
    }, function (err) {
        if (err) {
            throw err;
        }
    });
})

//this function to retreve data from the database to the front page 
app.get('/getEmp', (req, res) => {
    db.employeesSchema.find({}, (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

//this function to add Projects to the database
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

//this function to update on Projects from the database by project id
app.post('/updateProject', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const type = req.body.type;
    const fromDate = req.body.from;
    const toDate = req.body.to;

    db.projectsSchema.findOneAndUpdate({ _id: id }, {
        $set: {
            name: name,
            nationality: nationality,
            jobTitle: jobTitle
        }
    }, function (err) {
        if (err) {
            throw err;
        }
    });
})

//this function to delete Project from the database by project id  
app.post('/deletePro', (req, res) => {
    const id = req.body.id;

    db.projectsSchema.findOneAndRemove({ _id: id }, (err, data) => {
        if (err) {
            throw err;
        }
        res.sendStatus(201);
    })
})

//this function to retreve data from the database to the front page 
app.get('/getProject', (req, res) => {
    db.projectsSchema.find({}, (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

//this function save to the project after drag and drop
app.post('/saveProject', (req, res) => {
    const id = req.body.id;
    const Equipment = req.body.Equipment;
    const Employee = req.body.Employee;

    db.projectsSchema.findOneAndUpdate({ _id: id }, {
        $set: {
            equipment: Equipment,
            employees: Employee
        }
    }, function (err) {
        if (err) {
            throw err;
        }
    });
})

//this function to show the data that came from the front page
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '../angular-client/dist/angular-client/index.html')))
})

var port = 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));