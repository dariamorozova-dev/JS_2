const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},    
];

const renderProduct = ({id= 00, title = 'Product_#', price = 1000}) => {
    return `<div class="product-item">
                <h3 class="product-item__title">${title}</h3>
                <img src="../img/${id}.jpg" alt="Photo" height="115" class="product-item__img">
                <p class="product-item__price">${price} монет</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join(' ');

renderPage(products);