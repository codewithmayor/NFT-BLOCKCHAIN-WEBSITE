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

//fetch request from own server
/*fetch("http://localhost:3000")
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))*/
const server = "http://localhost:3000";

async function getData() {
    const response = await fetch(server);
    const data = await response.json();
    console.log(data);
}
getData();







