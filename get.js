/*const api_url = () => {
    fetch("https://www.blockonomics.co/api/merchant_orders?",{
        method: 'get',

    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}
api_url()*/


async function getInfo() {
    const myHeaders = new Headers();

    myHeaders.append('Authorization', 'x75ivmzZmOKE43j7m5R4gcjbJUKblQ2BLrhd5BraSic');
    myHeaders.append('Content-Type', 'application/json');  
  
    return fetch('https://www.blockonomics.co/api/merchant_orders?', {
      method: 'GET',
      mode: 'no-cors',
      headers: myHeaders,
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
  getInfo();