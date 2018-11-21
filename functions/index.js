const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express')
const app = express()
// configure app here, add routes, whatever
exports.api = functions.https.onRequest(app)
console.log('running')

app.get('/echo', function(req,res) {
    res.send('hello');
});

