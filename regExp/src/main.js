const TEXT = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'`
const regExp = /\'/gm;
const TEXT2 = TEXT.replace(regExp, '\"');
// console.log(TEST2);

const regExp2 = /^\'|(\s)\'|\'(\s)|\'$/gm;
const TEXT3 = TEXT.replace(regExp2, '$1"$2');
// console.log(TEST3);


const formEl = document.querySelector('.form');
const nameEl = document.getElementById('form-name');
const telEl = document.getElementById('form-tel');
const emailEl = document.getElementById('form-email');
const textEl = document.getElementById('form-text');
const submitEl = document.getElementById('btn-submit');
const resetEl = document.getElementById('btn-reset');

function checkForm() {
    const regExpName = /[^a-z]/i;
    if (regExpName.test(nameEl.value) || nameEl.value == '') {
        nameEl.style.outline = ('2px solid red');
        nameEl.nextElementSibling.style.display = ('block');
    }

    const regExpTel = /\+7\(\d{3}\)-?\d{3}-\d{4}/;
    if (!regExpTel.test(telEl.value) || telEl.value == '') {
        telEl.style.outline = ('2px solid red');
        telEl.nextElementSibling.style.display = ('block');
    }

    const regExpEmail = /[a-z{1}][\.?|\-?[a-z]{4,10}@[a-z]{4,8}\.ru/i;
    if (!regExpEmail.test(emailEl.value) || emailEl.value == '') {
        emailEl.style.outline = ('2px solid red');
        emailEl.nextElementSibling.style.display = ('block');
    }
}

function clearForm() {
    nameEl.style.outline = ('none');
    telEl.style.outline = ('none');
    emailEl.style.outline = ('none');
}

submitEl.addEventListener('click', checkForm);
resetEl.addEventListener('click', clearForm);