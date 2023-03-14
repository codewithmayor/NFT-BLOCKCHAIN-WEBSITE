//Client-side JavaScript Code for HTML functionality

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#navbar-menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('is-active')
})


document.onclick = function(e){
    if(e.target.id != 'navbar-menu' && e.target.id != 'mobile-menu')
    {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('is-active')
    }
}


//Fetch request from server

const server = "http://localhost:3000";

async function getData() {
    const response = await fetch(server);
    //let data = await JSON.parse(response);
    const data = await response.json();

    let values = []; //Append 'paid_satoshi' from each JSON instance in array

    for (const i in data){ //Check if payment was accepted by merchant
        if (data[i].status == 2) {
            values.push(data[i].paid_satoshi); 
        }  
    }
    const max_value = (Math.max.apply(Math, values) + ' Satoshi !'); //Get the maximum value 'Satoshi' from the array

    document.getElementById('highest').textContent = max_value; //Display maximum amount paid on website 

    console.log(max_value);
   
}
getData();

//setInterval(getData, 1000);