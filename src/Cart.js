class Cart {
    constructor() {
        // this.cartBtn = document.querySelector('.btn-cart');
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

    /**
     * добавляет новый товар в корзину или увеличивает количество уже имеющегося в
     * корзине товара на 1 
     * если товара еще нет -  отослать к методу renderCartItem()
     * если товар есть - увеличить на 1
     */
    addItem(event) {
        const itemNode = event.currentTarget.parentNode;
        const quantEl = itemNode.querySelector('.cart-item-quantity');
        const priceEl = itemNode.querySelector('.cart-item-price');
        const summEl = itemNode.querySelector('.cart-item-summ');
        let quant = +quantEl.innerText + 1;
        quantEl.innerText = quant;
        let price = +priceEl.innerText;
        summEl.innerText = quant*price;
        this.renderRezult();
    }

    /**
     * Уменьшает кол-во товаров в корзине на 1
     */
    deleteItem() {
        const itemNode = event.currentTarget.parentNode;
        const quantEl = itemNode.querySelector('.cart-item-quantity');
        const priceEl = itemNode.querySelector('.cart-item-price');
        const summEl = itemNode.querySelector('.cart-item-summ');
        let quant = +quantEl.innerText;
        if (quant >= 1) {
            quant--;
            quantEl.innerText = quant;
            let price = +priceEl.innerText;
            summEl.innerText = quant*price;
        }
        
        if (quant == 0) {
            itemNode.style.display = ('none');
        }
        this.renderRezult();
    }

    renderRezult() {
        const allSumm = [...this.cart.querySelectorAll('.cart-item-summ')];
        let rezult = 0;
        allSumm.forEach(el => {
            rezult += +el.innerHTML;
        });
        this.rezult.innerText = `Стоимость заказа: ${rezult}`;
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