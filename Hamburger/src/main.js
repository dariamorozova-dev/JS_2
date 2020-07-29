window.addEventListener('load', () => {
    const display = new Display();
    const hamburger = new Hamburger();

    hamburger.init(display);
    display.init(hamburger);
})