class ProductItem {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = 'https://placehold.it/200x150';
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
}