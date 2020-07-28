class ProductItem {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = 'https://placehold.it/200x150';
    }

    init(cart) {
        this.cart = cart;
    }

    /**
     * Метод "оборачивает" свойства объекта товара в верстку
     * @param {Object} Объект товара
     * @returns {HTMLDivElement}
     */
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <h3 class="product-item__title">${this.title}</h3>
                <img src="${this.img}" alt="Photo" height="115" class="product-item__img"">
                <p class="product-item__price">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }

    addEventListenerAtBtn(item) {
        const itemBtn = item.querySelector('.buy-btn');
        itemBtn.addEventListener('click', this.cart.addItem.bind(this.cart));
    }

    // addToCart() {
    //     const cartItems = document.querySelectorAll('.cart-item');
    //     cartItems.forEach(element => {
    //         if (this.id == element.dataset.id) {
    //             let quantEl = element.querySelector('.cart-item-quantity');
    //             let quant = +quantEl.innerHTML;
    //             quant++;
    //             const priceEl = element.querySelector('.cart-item-price');
    //             let price = +priceEl.innerHTML;
    //             const summEl = element.querySelector('.cart-item-summ');
    //             let summ = price*quant;
    //             summEl.innerText = summ;
    //             quantEl.innerText = quant;

    //             if (quant > 0) {
    //                 element.style.display = ('block');
    //             }
    //         }
    //     });
    //     this.cart.renderRezult();
    // }


}