class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];//массив товаров с версткой
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = `../img/${this.id}.jpg`;
    }

    render() {
        return `<div class="product-item">
                <h3 class="product-item__title">${this.title}</h3>
                <img src="${this.img}" alt="Photo" height="115" class="product-item__img"">
                <p class="product-item__price">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Cart {
    constructor() {
        this.cartBtn = document.querySelector('.btn-cart');
    }
}

let list = new ProductList();