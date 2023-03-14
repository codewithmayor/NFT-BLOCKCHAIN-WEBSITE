const express = require("express");
const app = express();
const axios = require("axios");
const fetch = require("node-fetch");
const cors = require("cors");
const https = require("https");

app.use(cors())


const api_key = 'GLzGB4kVDEMT0DdMpB3h0UYPRSVp7lpfOsxzqp8r5u8'

const options = {
    hostname: 'www.blockonomics.co',
    port: 443,
    path: '/api/merchant_orders',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + api_key,
      'Content-Type': 'application/json', 
    }
}


app.get('/', (req, res, next) => {
    var request = https.get(options, (response) => {
        let result = '';
  
        response.on('data', (chunk) => {
            result += chunk;
        });
  
        response.on('end', () => {
            let results = JSON.parse(result);
            console.log(results);
            res.send(results);
        });
    })  
        .on('error', function (e) {
            console.log("Got an error: ", e);
            next(e); // Pass error to error handling middleware
        });

        request.end()
})

app.listen(3000, () => console.log("Application is running..."));