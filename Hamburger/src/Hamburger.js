class Hamburger {
    constructor() {
        this.size = null;
        this.calories = null;
        this.price = null;
        this.stuff = [
            {
                text: 'С сыром',
                price: 10,
                calories: 20
            },
            {
                text: 'С салатом',
                price: 20,
                calories: 5
            },
            {
                text: 'С картофелем',
                price: 15,
                calories: 10
            },
        ];
        this.stuffChoosed = null;
        this.topping = null;
        this.mayonnaise = null;
        this.count = 1;
    }

    init(display) {
        this.display = display;
    }

    /**
     * Метод устанавливает слушатели событий на кнопки и, в зависимости от порядкового
     * номера вопроса, записывает выбор пользователя в соответствующее свойство
     * объекта Гамбургер
     */
    addEventListeners() {
        for (let button of this.display.buttons) {
            button.addEventListener('click', () => {
                if (this.count == 1) {
                    this.size = event.currentTarget.innerText;
                }
                if (this.count == 2) {
                    this.stuffChoosed = event.currentTarget.innerText;
                }
                if (this.count == 3) {
                    this.topping = event.currentTarget.innerText;
                }
                if (this.count == 4) {
                    this.mayonnaise = event.currentTarget.innerText;
                }
                this.calories += +event.currentTarget.dataset.calories;
                this.price += +event.currentTarget.dataset.price;
                this.display.addChoiceToRezult();

                if (this.count == 5) {
                   this.lastEventListener()
                }
            })
        }
    }

    /**
     * Метод добавляет слушатель события на кнопку с предложением выбрать другой бургер
     * По клику принудительно перезагружает страницу
     */
    lastEventListener() {
        this.display.buttons[0].addEventListener('click', () => window.location.reload(true));
    }

    /**
     * Метод определяет текст, который будет записан в графу с результатом выбора пользователя и заголовок следующего вопроса
     * @returns {Object} ques - *в результат* вопрос, на который ответил пользователь
     *                   answ - *в результат* ответ пользователя на вопрос
     *                   title - заголовок следующего вопроса
     */
    checkQuestion() {
        let text = {
            ques: '',
            answ: '',
            title: '',
        }
        switch (this.count) {
            case 1:
                text.ques = 'Вы выбрали бургер: ';
                text.answ = this.size;
                text.title = 'Какую начинку предпочитаете?';
                this.count++;
                break;

            case 2:
                text.ques = 'Вы выбрали начинку: ';
                text.answ = this.stuffChoosed;
                text.title = 'Добавим приправу?';
                this.count++;
                break;

            case 3:
                text.ques = 'Приправа: ';
                text.answ = this.topping;
                text.title = 'Добавим майонез?';
                this.count++;
                break;

            case 4:
                text.ques = 'Майонез: ';
                text.answ = this.mayonnaise;
                text.title = 'Ура, Вы выбрали бургер!';
                this.count++;
                break;
        }
        return text;
    }
}