let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Bicycle',
        image: 'bicycle1.jpg' ,
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'bicycle2.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '44.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'bicycle3.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '33.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '22.jpg',
        price: 120000
    },
    {
        id: 7,
        name: '2L Bottle ',
        image: '2l bottle.jpg',
        price: '15000'
    },
    {
        id: 8,
        name: '2L Water Bottle ',
        image: 'bottle2.jpg',
        price: '13500'
    },
    {
        id: 9,
        name: 'Step Counter Watch ',
        image: 'watch1.jpg',
        price: '7500'
    },
    {
        id: 10,
        name: 'Step Counter Watch ',
        image: 'watch2.jpg',
        price: '15000'
    },
    {
        id: 11,
        name: 'Digital Thermometer ',
        image: 'thermometer1.jpg',
        price: '25000'
    },
    {
        id: 12,
        name: 'Thermometer ',
        image: 'thermometer2.jpg',
        price: '1500'
    },
    {
        id: 13,
        name: 'Quality Sneakers ',
        image: 'sneaker1.jpg',
        price: '75000'
    },
    {
        id: 14,
        name: 'Quality Sneakers ',
        image: 'sneaker2.jpg',
        price: '15000'
    },
    {
        id: 15,
        name: 'Quality Bike Gloves ',
        image: 'glove2.jpg',
        price: '5000'
    },
    {
        id: 16,
        name: 'Bike Gloves ',
        image: 'glove2.jpg',
        price: '5000'
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})" id="carts"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg> ADD TO CART</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
