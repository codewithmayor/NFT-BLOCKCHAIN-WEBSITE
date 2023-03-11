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

async function getData() {
    const api_url = "https://www.blockonomics.co/api/merchant_orders?";
    const fetch_response = await fetch(api_url);
    const data = await fetch_response.json();
    console.log(data);
}
getData();