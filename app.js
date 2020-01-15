// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');


const app = express();
app.use(express.static(path.join(__dirname, 'dist')));



//routing stuff
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {
    console.log('Example app listening on port 3000!');
});