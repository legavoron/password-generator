'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var blockForPassword = document.querySelector('.password_block');
var passwordValue = document.querySelector('.password_value');
var checkboxCirLetters = document.querySelector('#checkboxLangeCir');
var checkboxLatLetters = document.querySelector('#checkboxLangeLat');
var checkboxHighLetters = document.querySelector('#checkboxLetters');
var checkboxSymbolsOn = document.querySelector('#checkboxSymbols');
var checkboxNumbersOn = document.querySelector('#checkboxNumbers');
var valueRange = document.querySelector('.range_value');
var rangeInput = document.querySelector('#RangeInput');

var hintCircle = document.querySelectorAll('.tooltip_circle');
var hintHidden = document.querySelectorAll('.tooltip_hidden');

var bntGeneration = document.querySelector('#btnGen');
var bntcopyPassword = document.querySelector('#btnCopy');

var chooseLange = document.querySelector('.lang_choose_block');
var containerSelects = document.querySelector('.selects_container');
var selectBlock1 = document.querySelector('#selectBlock1');
var selectBlock2 = document.querySelector('#selectBlock2');
var selectBlock3 = document.querySelector('#selectBlock3');
var selectBlock4 = document.querySelector('#selectBlock4');

var cirillBox = document.querySelector('#cirillBox');
var latBox = document.querySelector('#latBox');
var highLettersBox = document.querySelector('#highLettersBox');
var symbolBox = document.querySelector('#symbolBox');
var numbersBox = document.querySelector('#numbersBox');
var heading = document.querySelector('.heading');
var rangeText = document.querySelector('.range_text');

var fonCircle = document.querySelector('.circle_fon');
var menuContainers = document.querySelectorAll('.menu_container');
var hiddenCircleBlocks = document.querySelectorAll('.tooltip_circle');
var menuContainerText = document.querySelectorAll('.menu_p');

// ------------------------------------------------------------------------------------------------------------------
function checkLocalStorage() {
    var colorFone = localStorage.getItem('color');

    if (colorFone === 'black') {
        editColor(selectBlock1, '#0D0D0D', '#2E5159', '#2E5159', 'black');
    }
    if (colorFone === 'blue') {
        editColor(selectBlock2, "#013E59", '#01728E', '#BF7F62', 'blue');
    }
    if (colorFone === 'green') {
        editColor(selectBlock3, "#02705C", '#89A895', '#A0B8C4', 'green');
    }
    if (colorFone === 'red') {
        editColor(selectBlock4, "#5E2128", '#280A0C', '#C83C5A', 'red');
    }

    editLanguage();
}
checkLocalStorage();
// ------------------------------------------------------------------------------------------------------------------

bntGeneration.addEventListener('click', generatingPassword);

function generatingPassword() {
    var passwordArray = ['ALEH'];
    var resultPasswordArray = [];
    var rangeNUm = +valueRange.innerHTML;

    var cirillLetters = [];
    var latLetters = [];
    var highLettersCirill = [];
    var highLettersLat = [];

    if (chooseLange.innerHTML === 'en') {
        cirillLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', "р", 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

        latLetters = ['b', 'd', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'q', 'r', 's', 't', 'v', 'w', 'z'];

        highLettersCirill = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

        highLettersLat = ['D', 'F', 'G', 'I', 'J', 'L', 'N', 'Q', 'R', 'S', 'U', 'V', 'W', 'Z'];
    } else {
        cirillLetters = ['б', 'в', 'г', 'д', 'ё', 'ж', 'з', 'и', 'й', 'л', 'п', 'ф', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

        latLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        highLettersCirill = ['Б', 'Г', 'Д', 'Ё', 'Ж', 'З', 'И', 'Й', 'Л', 'П', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

        highLettersLat = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    var symbols = ['!', '@', '#', '%', '^', '&', '*', '(', ')', '~', '|', '-', '+'];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (checkboxCirLetters.checked) {
        passwordArray = [].concat(_toConsumableArray(passwordArray), _toConsumableArray(cirillLetters));
    }
    if (checkboxLatLetters.checked) {
        passwordArray = [].concat(_toConsumableArray(passwordArray), _toConsumableArray(latLetters));
    }
    if (checkboxHighLetters.checked) {
        if (checkboxCirLetters.checked) {
            passwordArray = [].concat(_toConsumableArray(passwordArray), _toConsumableArray(highLettersCirill));
        }
        if (checkboxLatLetters.checked) {
            passwordArray = [].concat(_toConsumableArray(passwordArray), _toConsumableArray(highLettersLat));
        }
    }
    if (checkboxSymbolsOn.checked) {
        passwordArray = [].concat(_toConsumableArray(passwordArray), symbols);
    }
    if (checkboxNumbersOn.checked) {
        passwordArray = [].concat(_toConsumableArray(passwordArray), numbers);
    }

    for (var i = 0; i < rangeNUm; i++) {
        var randomNumber = getRandomNumber(1, passwordArray.length - 1);
        resultPasswordArray.push(passwordArray[randomNumber]);
    }

    passwordValue.innerHTML = resultPasswordArray.join('');
}

// ------------------------------------------------------------------------------------------------------------------
function changeRangeValue() {
    rangeInput.addEventListener('change', function () {
        valueRange.innerHTML = rangeInput.value;
    });
}
changeRangeValue();

// ------------------------------------------------------------------------------------------------------------------
function showHints() {
    hintCircle.forEach(function (hint, i) {
        hint.addEventListener('mouseover', function () {
            hintHidden[i].style.display = 'block';
        });
    });
}
showHints();

function hideHints() {
    hintCircle.forEach(function (hint, i) {
        hint.addEventListener('mouseout', function () {
            hintHidden[i].style.display = 'none';
        });
    });
}
hideHints();
// ------------------------------------------------------------------------------------------------------------------

function changeLang() {
    chooseLange.addEventListener('click', editLanguage);
}
changeLang();

function editLanguage() {
    if (chooseLange.innerHTML === 'en') {
        heading.innerHTML = 'PASSWORD GENERATOR';
        passwordValue.innerHTML = 'Your password';
        cirillBox.innerHTML = 'Cyrillic alphabet';
        latBox.innerHTML = 'Latin alphabet';
        highLettersBox.innerHTML = 'Add uppercase letters';
        symbolBox.innerHTML = 'Add Characters';
        numbersBox.innerHTML = 'Add numbers';
        rangeText.innerHTML = 'Length:';
        bntGeneration.innerHTML = 'Generate';
        bntcopyPassword.innerHTML = 'Copy';
        chooseLange.innerHTML = 'ru';
        checkboxCirLetters.checked = false;
        checkboxLatLetters.checked = true;
    } else {
        heading.innerHTML = 'ГЕНЕРАТОР ПАРОЛЕЙ';
        passwordValue.innerHTML = 'Ваш пароль';
        cirillBox.innerHTML = 'Кириллица';
        latBox.innerHTML = 'Латинские буквы';
        highLettersBox.innerHTML = 'Включать прописные буквы';
        symbolBox.innerHTML = 'Включать символы';
        numbersBox.innerHTML = 'Включать цифры';
        rangeText.innerHTML = 'Длина:';
        bntGeneration.innerHTML = 'Сгенерировать';
        bntcopyPassword.innerHTML = 'Скопировать';
        chooseLange.innerHTML = 'en';
        checkboxLatLetters.checked = false;
        checkboxCirLetters.checked = true;
    }
}
// ------------------------------------------------------------------------------------------------------------------
function showHiddenColorBox() {
    containerSelects.addEventListener('mouseover', function () {
        containerSelects.style.height = '86px';
        selectBlock2.style.display = 'block';
        selectBlock3.style.display = 'block';
        selectBlock4.style.display = 'block';
    });
}
showHiddenColorBox();

function HideHiddenColorBox() {
    containerSelects.addEventListener('mouseout', function () {
        containerSelects.style.height = '25px';
        selectBlock2.style.display = 'none';
        selectBlock3.style.display = 'none';
        selectBlock4.style.display = 'none';
    });
}
HideHiddenColorBox();

// ------------------------------------------------------------------------------------------------------------------

function cangeColor(select, fonColor, btnsColor, elementsColor, idColor) {

    select.addEventListener('click', function () {
        editColor(select, fonColor, btnsColor, elementsColor, idColor);
    });
}
function editColor(select, fonColor, btnsColor, elementsColor, idColor) {
    fonCircle.style.backgroundColor = fonColor;
    containerSelects.style.backgroundColor = fonColor;
    bntGeneration.style.backgroundColor = btnsColor;
    bntcopyPassword.style.backgroundColor = btnsColor;

    menuContainers.forEach(function (elem) {
        elem.style.borderColor = elementsColor;
    });

    hiddenCircleBlocks.forEach(function (elem) {
        elem.style.backgroundColor = elementsColor;
    });

    localStorage.setItem('color', idColor);
}
cangeColor(selectBlock1, '#0D0D0D', '#2E5159', '#2E5159', 'black');
cangeColor(selectBlock2, "#013E59", '#01728E', '#BF7F62', 'blue');
cangeColor(selectBlock3, "#02705C", '#89A895', '#A0B8C4', 'green');
cangeColor(selectBlock4, "#5E2128", '#280A0C', '#C83C5A', 'red');

// ------------------------------------------------------------------------------------------------------------------
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}