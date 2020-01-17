// Setup empty JS object to act as endpoint for all route
projectData = {};

var path = require('path');
const express = require('express');
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
const app = express();

// Cors for cross origin allowance
const cors = require('cors');

const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Initialize the main project folder
app.use(express.static(__dirname + 'src/client'));
console.log(__dirname);
app.get('/', function(req, res) {
    res.sendFile('src/client/views/index.html', { root: __dirname + '/..' })
})

// Spin up the server
const port = 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`the port of this server is ${port}`);
}



app.get('/', function(req, res) {
        res.sendFile('dist/index.html')
    })
    // API Aylien credentials:
var textapi = new aylien({
    application_id: "process.env.API_ID",
    application_key: "process.env.API_KEY",
    application_endpoint: "process.env.API_ENDPOINT"
});



// designates what port the app will listen to for incoming requests
app.get("/data", (req, res) => {
    res.send(projectData);
})

app.post('/api', (req, res) => {
    // console.log(req.body);
    projectData = {
        // temp: req.body.temp,
        // date: req.body.date,
        // feeling: req.body.feeling
    }
    console.log(projectData)

})