const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use(express.static(path.join(__dirname, '../angular-client/dist/angular-client')))

app.post('/login' , function(req , res) {
	console.log('aa' , req.body)
})

app.get('/', function (req , res) {
	res.sendFile("index.html")
})

var port= 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));