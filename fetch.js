const express = require("express");
const app = express();
const axios = require("axios");
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors())


app.get('/api/merchant_orders', (req, res) => {
    axios.get("https://www.blockonomics.co")
    .then(response => {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    })
});


app.listen(3000, () => console.log("Application is running..."));



