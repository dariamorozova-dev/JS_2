class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }

    /**
     * метод добавляет товары в массив
     * @returns {Array} массив this.goods с объектами товаров
     */
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    /**
     * Метод добавляет верстку товаров на страницу
     * @returns {HTMLDivElement} верстка всех товаров из this.goods в отдельных div'ах
     */
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product).render();
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item);
        }
    }

    /**
     * Метод вычисляет суммму всех выведенных на страницу товаров
     * @returns {Number} Сумма всех товаров, выведенных на страницу
     */
    calcSumOfAllProducts() {
        const prices = document.querySelectorAll('.product-item__price');
        let sum = 0;
        for (let price of prices) {
            sum += +price.innerText;
        }
        return sum;
    }
}