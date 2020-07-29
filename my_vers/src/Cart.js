class Cart {
    constructor() {
        this.cartWrp = document.querySelector('.cart-wrp');
        this.cart = document.querySelector('.cart');
        this.rezult = document.querySelector('.cart-rezult');
        this.APICart = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        this.dataList = {};

        this.getProductsInCart()
            .then(data => {
                this.dataList = data;
                this.render()
                this.init();
            });
    }

    getProductsInCart() {
        return fetch(`${this.APICart}/getBasket.json`)
            .then(rezult => rezult.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        for (let i = 0; i < this.dataList.contents.length; i++) {
            let item = new CartItem(this.dataList.contents[i]).renderCartItem();
            this.cart.insertAdjacentHTML('afterbegin', item);
        }
        this.renderRezult();
    }

    /**
     * Метод назначает слушатели событий на все кнопки
     */
    init() {
        const cartBtn = document.querySelector('.btn-cart');
        cartBtn.addEventListener('click', this.showCartBlock.bind(this));

        const cartBtnBuy = document.querySelector('.btn-cart-block-buy');
        cartBtnBuy.addEventListener('click', this.buyAll.bind(this));

        const cartBtnClose = document.querySelector('.btn-cart-block-close');
        cartBtnClose.addEventListener('click', this.hideCartBlock.bind(this));

        const cartBtnAddItem = document.querySelectorAll('.btn-cart-block-addItem');
        cartBtnAddItem.forEach(element => {
            element.addEventListener('click', this.addItem.bind(this));
        });

        const cartBtnDelItem = document.querySelectorAll('.btn-cart-block-delItem');
        cartBtnDelItem.forEach(element => {
            element.addEventListener('click', this.deleteItem.bind(this));
        });
        
    }

    showCartBlock() {
        this.cartWrp.style.visibility = ('visible');
    }

    hideCartBlock() {
        this.cartWrp.style.visibility = ('hidden');
    }

    addItem(event) {
        const itemNode = this.checkClickElement(event);
        const quantEl = itemNode.querySelector('.cart-item-quantity');
        const summEl = itemNode.querySelector('.cart-item-summ');

        for (let i = 0; i < this.dataList.contents.length; i++) {
            if (this.dataList.contents[i].id_product == itemNode.dataset.id) {
                
                if (this.dataList.contents[i].quantity == 0) {
                    itemNode.style.display = ('block');
                }

                this.dataList.contents[i].quantity++;
                this.dataList.amount += this.dataList.contents[i].price;
                this.dataList.countGoods++;
                quantEl.innerHTML = this.dataList.contents[i].quantity;
                summEl.innerHTML = this.dataList.contents[i].quantity * this.dataList.contents[i].price;
            }
        };
        this.renderRezult();
    }

    checkClickElement(event) {
        const clickID = +event.currentTarget.parentNode.dataset.id;
        const cartElements = [...this.cart.querySelectorAll('.cart-item')];
        let element = null;
        cartElements.forEach(el => {
            if (el.dataset.id == clickID) {
                element = el;
            }
        })
        return element;
    }

    deleteItem(event) {
        const itemNode = event.currentTarget.parentNode;
        const quantEl = itemNode.querySelector('.cart-item-quantity');
        const priceEl = itemNode.querySelector('.cart-item-price');
        const summEl = itemNode.querySelector('.cart-item-summ');
        for (let i = 0; i < this.dataList.contents.length; i++) {
            if (this.dataList.contents[i].id_product == itemNode.dataset.id) {

                if (this.dataList.contents[i].quantity >= 1) {
                    this.dataList.contents[i].quantity--;
                    this.dataList.amount -= this.dataList.contents[i].price;
                    this.dataList.countGoods--;
                    quantEl.innerText = this.dataList.contents[i].quantity;
                    summEl.innerText = this.dataList.contents[i].quantity * this.dataList.contents[i].price;
                }

                if (this.dataList.contents[i].quantity == 0) {
                    itemNode.style.display = ('none');
                }
            }
        };
        this.renderRezult();
    }

    renderRezult() {
        this.rezult.innerText = `Стоимость заказа: ${this.dataList.amount}`;
    }

    /**
     * метод отправляет список товаров из корзины на сервер
     */
    buyAll() {
        this.blockClicks()
        const cartToBuy = JSON.stringify(this.dataList);
        console.log(cartToBuy);

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(cartToBuy);
        
        this.clearCart()
    }

    /**
     * метод блокирует клики по странице во время отправки формы на сервер
     */
    blockClicks() {
        console.log('clicks are blocked');
    }

    /**
     * метод очищает корзину после отправки списка товаров на сервер
     */
    clearCart() {
        console.log('cart is clear now!')
    }
}