const express = require('express');
const bodyParser = require('body-parser');
const easy_api = require('./api/easybank');

const PORT = process.env.PORT || 5000;

const app = express();

app.get( '/api/easybank', function(req, res) {
    res.sendFile( __dirname + '/api/easybank.json' );
})


app.listen( PORT, function(req, res){
    console.log(`Server is running on port ${PORT}` );
})