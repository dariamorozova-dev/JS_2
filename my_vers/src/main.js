

window.addEventListener('load', () => {
    const list = new ProductList();
    const cart = new Cart();
    console.log(list.calcSumOfAllProducts());
    list.init(cart);
    console.log(cart);
})