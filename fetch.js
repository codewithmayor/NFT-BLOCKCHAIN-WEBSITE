const express = require("express");
const app = express();
const axios = require("axios");
const fetch = require("node-fetch");
const cors = require("cors");
const https = require("https");

app.use(cors())


/*const url = 'https://www.blockonomics.co/api/merchant_orders?';

const header = {
    'Authorization': 'Bearer ' + 'GLzGB4kVDEMT0DdMpB3h0UYPRSVp7lpfOsxzqp8r5u8',
};

let result = '';
const req = https.request(url, header, (res) => {
    console.log(res.statusCode);

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        result += chunk;
    });

    res.on('end', () => {
        console.log(result);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end();*/

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

/*const req = https.request(options, (res) => {
    let result = "";

    res.on('data', (chunk) => {
        result += chunk;
    });

    res.on('end', () => {
        let results = JSON.parse(result);
        console.log(results);
        res.send(results);  
    });

});
  
req.on('error', (error) => {
    console.error(error)
});
  
req.write('')
req.end()*/

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