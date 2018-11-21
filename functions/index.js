const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
const app = express();
// configure app here, add routes, whatever

console.log('running');

app.get('/echo', function(req,res) {
    res.send('hello');
});

var users = [{
    id: "123456789",
    lon: 29.5,
    lat: 32.3,
    displayName: "happy test user",
    
}];

function allowedToREquest(id) {
    return true;
}

app.get('/around/:lat/:log/:radius',(req, res)=>{
    if(!allowedToREquest(req.headers.authentication)){
        return;
    }
    res.writeHead(200, {
      'Content-Type': mimeType,
      'Content-Length': contents.length,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache'
    });
})

exports.api = functions.https.onRequest(app);
