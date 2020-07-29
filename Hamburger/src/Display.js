class Display {
    constructor() {
        this.buttons = document.querySelectorAll('.hamburger');
        this.rezultEl = document.querySelector('.rezult');
        this.titleEl = document.querySelector('.page-title');
    }

    init(hamburger) {
        this.hamburger = hamburger;
        this.hamburger.addEventListeners();
    }

    /**
     * Метод делает видимым блок с выбором пользователя после первого ответа на вопрос
     */
    changeRezultVisibility() {
        this.rezultEl.style.visibility = ('visible');
    }

    /**
     * Метод проверяет видидимость блока с результатом. 
     * Если блок скрыт, вызывает метод, меняющий видимость.
     */
    checkRezultVisibility() {
        if (this.rezultEl.style.visibility !== ('visible')) {
            this.changeRezultVisibility();
        }
    }

    /**
     * Метод добавляет блок с текстом, описывающим выбор пользователя, в блок с общим
     * описанием заказа 
     */
    addChoiceToRezult() {
        this.checkRezultVisibility();
        const text = this.hamburger.checkQuestion();
        this.rezultEl.insertAdjacentHTML('beforeend', `<div><span>${text.ques} ${text.answ}</span></div>`);
        this.changePageTitle(text.title);
        this.changeChoiceBlocks(this.hamburger.count);
        if (this.hamburger.count == 5) {
            this.rezultEl.insertAdjacentHTML('beforeend', `<div class="price"><span>Стоимость: ${this.hamburger.price} рублей</span></div><div class="calories"><span>Калорийность: ${this.hamburger.calories} калорий</span></div>`);
        }
    }

    /**
     * Метод меняет текст заголовка страницы
     * @param {String} title заголовок страницы, переданный методом checkQuestion()
     */
    changePageTitle(title) {
        this.titleEl.innerText = title;
    }

    /**
     * Метод скрывает или показывает дополнительные блоки с ответами в зависимости от
     * порядкового номера вопроса
     * @param {Number} count Счётчик порядкового номера вопроса
     */
    changeChoiceBlocks(count) {
        if (count == 2) {
            this.buttons.forEach(el => el.style.display = ('none'));
            const contentEl = document.querySelector('.content');
            for (let i = 0; i < this.hamburger.stuff.length; i++) {
                contentEl.insertAdjacentHTML('beforeend', `<div class="stuff" data-price="${this.hamburger.stuff[i].price}" data-calories="${this.hamburger.stuff[i].calories}"><span class="stuff__title">${this.hamburger.stuff[i].text}</span></div>`)
            }
            this.buttons = document.querySelectorAll('.stuff');
            this.hamburger.addEventListeners();
        }

        if (count == 3) {
            this.buttons.forEach(el => el.style.display = ('none'));
            this.buttons = document.querySelectorAll('.hamburger');
            this.buttons.forEach(el => el.style.display = ('block'));
            this.buttons[0].innerHTML = '<span class="hamburger__title">С приправой</span>';
            this.buttons[0].dataset.calories = 0;
            this.buttons[0].dataset.price = 15;
            this.buttons[1].innerHTML = '<span class="hamburger__title">Без приправы</span>';
            this.buttons[1].dataset.calories = 0;
            this.buttons[1].dataset.price = 0;
        }

        if (count == 4) {
            this.buttons[0].innerHTML = '<span class="hamburger__title">С майонезом</span>';
            this.buttons[0].dataset.calories = 5;
            this.buttons[0].dataset.price = 20;
            this.buttons[1].innerHTML = '<span class="hamburger__title">Без майонеза</span>';
            this.buttons[1].dataset.calories = 0;
            this.buttons[1].dataset.price = 0;
        }

        if (count == 5) {
            this.buttons[0].innerHTML = '<span class="hamburger__title">Выбрать другой бургер!</span>';
            this.buttons[1].style.display = ('none');
            this.buttons[0].dataset.calories = 0;
            this.buttons[0].dataset.price = 0;
            this.buttons[1].dataset.calories = 0;
            this.buttons[1].dataset.price = 0;
        }
    }
}