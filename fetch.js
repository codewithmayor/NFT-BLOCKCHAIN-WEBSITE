/*const apiUrl = "https://www.blockonomics.co/api/merchant_orders?&apiKey=x75ivmzZmOKE43j7m5R4gcjbJUKblQ2BLrhd5BraSic";

async function fetchInfo() {
    try{
    const response = await fetch(`${apiUrl}`);
    if(!response.ok) {
        throw new Error(`Failed to fetch info: ${response.status}`);
    }

    return response.json();
    } catch (e) {
        console.log(e);
    }

    function listInfo(linkContainerElementId) {
        const linkContainerElement = document.getElementById('billboard');

        if (!linkContainerElement) {
            return;
        }

        fetchInfo()
        .then((merchant_orders) => {
            if (!merchant_orders) {
                linkContainerElement.innerHTML = "No info fetched";
                return;
            }

            for (const order of merchant_orders) {
                linkContainerElement.appendChild(infoElement(order));
            }
        })
        .catch((e) => {
            console.log(e);
        });
    }
}

function infoElement(merchant_orders) {
    const linkElementTitle = document.createElement('h3');
    linkElementTitle.innerText = link.title;
    return linkElementTitle;

}
*/

/*fetch(curl -H) Authorization: 'Bearer x75ivmzZmOKE43j7m5R4gcjbJUKblQ2BLrhd5BraSic',
'https://www.blockonomics.co/api/merchant_ordershttps://www.blockonomics.co/api/merchant_orders').then((data) =>{
    console.log(data);
})*/


const Database = require('nedb');
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const { response } = require('express');

const database = new Database('database.db');
database.loadDatabase();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

async function getdata() {
    const api_url = "https://www.blockonomics.co/api/merchant_orders?";
    const fetch_response = await fetch(api_url);
    const data = await fetch_response.json();
    response.json(data);
};


/*const api_key = "x75ivmzZmOKE43j7m5R4gcjbJUKblQ2BLrhd5BraSic";
const domain_name = 'https://www.blockonomics.co/api/merchant_orders'; 
const api_url = `https://www.blockonomics.co/api/merchant_orders/${api_key}`;

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
}
getData();*/