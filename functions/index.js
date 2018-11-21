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

function shuffle (arr) {
    arr.sort(() => Math.random < 0.5);
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
    res.send(JSON.stringify(
        shuffle(users
                .filter(user => Math.abs(+user.lat - req.params.lat) < +req.params.radius)
                .filter(user => Math.abs(+user.lon - req.params.lon) < +req.params.radius)
               ).slice(5) // give 5 random results
    ));
})

exports.api = functions.https.onRequest(app);
