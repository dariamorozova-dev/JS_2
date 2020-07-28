class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];

        this.APIItems = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    init(cart) {
        this.cart = cart;
    }

    _getProducts() {
        return fetch(`${this.APIItems}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    /**
     * Метод добавляет верстку товаров на страницу
     * @returns {HTMLDivElement} верстка всех товаров из this.goods в отдельных div'ах
     */
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            item.init(this.cart);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
            const itemNode = document.querySelector(`.product-item[data-id="${item.id}"]`);
            item.addEventListenerAtBtn(itemNode);
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