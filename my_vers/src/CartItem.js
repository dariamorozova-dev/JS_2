class CartItem {
    constructor(item) {
        this.id = item.id_product;
        this.name = item.product_name;
        this.price = item.price;
        this.quantity = item.quantity;
    }

    /**
     * метод добавляет верстку указанного товара в корзину
     */
    renderCartItem() {
        const itemHTML = `<div class="cart-item" data-id="${this.id}"><span class="cart-item-name">${this.name}</span><span class="cart-item-price">${this.price}</span><span class="cart-item-quantity">${this.quantity}</span><span class="cart-item-summ">${this.quantity*this.price}</span><button class="btn-cart-block btn-cart-block-addItem">+</button><button class="btn-cart-block btn-cart-block-delItem">-</button></div>`;
        return itemHTML;
    }

    /**
     * метод удаляет верстку указанного товара из корзины
     */
    deleteCartItem() {

    }

    /**
     * метод проверяет есть ли указанный товар в корзине
     */
    isItInCart() {

    }

}