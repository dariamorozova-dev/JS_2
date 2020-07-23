

window.addEventListener('load', () => {
    const list = new ProductList();
    const cart = new Cart();
    console.log(list.calcSumOfAllProducts());
})