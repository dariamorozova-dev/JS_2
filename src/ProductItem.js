class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = `../img/${this.id}.jpg`;
    }

    /**
     * Метод "оборачивает" свойства объекта товара в верстку
     * @param {Object} Объект товара
     * @returns {HTMLDivElement}
     */
    render() {
        return `<div class="product-item">
                <h3 class="product-item__title">${this.title}</h3>
                <img src="${this.img}" alt="Photo" height="115" class="product-item__img"">
                <p class="product-item__price">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}