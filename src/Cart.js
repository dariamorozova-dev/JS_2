class Cart {
    constructor() {
        // this.cartBtn = document.querySelector('.btn-cart');
        this.cartWrp = document.querySelector('.cart-wrp');
        this.cart = document.querySelector('.cart');
        this.APICart = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        this.buyList = {};
        this.getProductsInCart()
            .then(data => {
                this.buyList = {...data};
                this.render() //написать метод
            });
        this.init();
    }

    init() {
        const cartBtn = document.querySelector('.btn-cart');
        const cartBtnBuy = document.querySelector('.btn-cart-block-buy');
        const cartBtnClose = document.querySelector('.btn-cart-block-close');
        cartBtn.addEventListener('click', this.showCartBlock.bind(this));
        cartBtnBuy.addEventListener('click', this.buyAll.bind(this));
        cartBtnClose.addEventListener('click', this.hideCartBlock.bind(this));
    }

    showCartBlock() {
        this.cartWrp.style.visibility = ('visible');
    }

    hideCartBlock() {
        this.cartWrp.style.visibility = ('hidden');
    }

    render() {
        for (let i = 0; i < this.buyList.contents.length; i++) {
            this.cart.insertAdjacentHTML('afterbegin', `<div class="cart-item"><span class="cart-item-name">${this.buyList.contents[i].product_name}</span><span class="cart-item-price">${this.buyList.contents[i].price}</span><span class="cart-item-quantity">${this.buyList.contents[i].quantity}</span><button class="btn-cart-block btn-cart-block-addItem">+</button><button class="btn-cart-block btn-cart-block-delItem">-</button></div>`)
        }
    }

    getProductsInCart() {
        return fetch(`${this.APICart}/getBasket.json`)
            .then(rezult => rezult.json())
            .catch(error => {
                console.log(error);
            })
    }

    /**
     * добавляет новый товар в корзину или увеличивает количество уже имеющегося в
     * корзине товара на 1 
     * если товара еще нет -  отослать к методу renderCartItem()
     * если товар есть - увеличить на 1
     */
    addItem() {
        isItInCart()
    }

    /**
     * удаляет товар из корзины
     * если кол-во товара > 1, уменьшает кол-во на 1
     * если кол-во товара = 1 -  отослать к методу deleteCartItem()
     */
    deleteItem() {
        isItInCart()
    }

    /**
     * метод отправляет список товаров из корзины на сервер
     */
    buyAll() {
        blockClicks()

        clearCart()
    }

    /**
     * метод блокирует клики по странице во время отправки формы на сервер
     */
    blockClicks() {

    }

    /**
     * метод очищает корзину после отправки списка товаров на сервер
     */
    clearCart() {

    }
}