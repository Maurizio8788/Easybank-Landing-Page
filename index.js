const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

/* file statici   */

app.use(express.static(path.join(__dirname, 'client/build')));


/*  API call */

app.get( '/api/easybank', function(req, res) {
    res.sendFile( __dirname + '/api/easybank.json' );
})

/*  SERVER  */

app.listen( PORT, function(req, res){
    console.log(`Server is running on port ${PORT}` );
})