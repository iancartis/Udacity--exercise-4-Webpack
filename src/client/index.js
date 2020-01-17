const dotenv = require('dotenv');
dotenv.config();
var aylien = require("aylien_textapi");
var textapi = new AYLIENTextAPI({
    application_id: "YOUR_APP_ID",
    application_key: "YOUR_APP_KEY"
});

var textapi = new aylien({
    application_id: "process.env.API_ID",
    application_key: "process.env.API_KEY",
    application_endpoint: "process.env.API_ENDPOINT"
});