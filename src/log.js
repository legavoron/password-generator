let blockForPassword = document.querySelector('.password_block');

let checkboxCirLetters = document.querySelector('#checkboxLangeCir');
let checkboxLatLetters = document.querySelector('#checkboxLangeLat');
let checkboxHighLetters = document.querySelector('#checkboxLetters');
let checkboxSymbolsOn = document.querySelector('#checkboxSymbols');
let checkboxNumbersOn = document.querySelector('#checkboxNumbers');
let valueRange = document.querySelector('.range_value');
let rangeInput = document.querySelector('#RangeInput');

let hintCircle = document.querySelectorAll('.tooltip_circle');
let hintHidden = document.querySelectorAll('.tooltip_hidden');

let bntGeneration = document.querySelector('#btnGen');
let bntcopyPassword = document.querySelector('#btnCopy');

let chooseLange = document.querySelector('.lang_choose_block');
let selectBlock1 = document.querySelector('#selectBlock1');
let selectBlock2 = document.querySelector('#selectBlock2');
let selectBlock3 = document.querySelector('#selectBlock3');
let selectBlock4 = document.querySelector('#selectBlock4');


bntGeneration.addEventListener('click', generatingPassword);

function generatingPassword() {
    let passwordArray = ['ALEH'];
    let resultPasswordArray = [];
    let rangeNUm = +valueRange.innerHTML;

    
    let cirillLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', "р", 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    let latLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let highLettersCirill = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    let highLettersLat = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let symbols = ['!', '@', '#', '%', '^', '&', '*', '(', ')', '~', '|', '-', '+'];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (checkboxCirLetters.checked) {
        passwordArray = [...passwordArray,...cirillLetters];
    }
    if (checkboxLatLetters.checked) {
        passwordArray = [...passwordArray,...latLetters];
    }
    if (checkboxHighLetters.checked) {
        if (checkboxCirLetters.checked) {
            passwordArray = [...passwordArray,...highLettersCirill];
        }
        if (checkboxLatLetters.checked) {
            passwordArray = [...passwordArray,...highLettersLat];
        }
    }
    if (checkboxSymbolsOn.checked){
        passwordArray = [...passwordArray,...symbols];
    }
    if (checkboxNumbersOn.checked){
        passwordArray = [...passwordArray,...numbers];
    }
    
    for (let i = 0; i < rangeNUm; i ++) {
        let randomNumber = getRandomNumber(1, passwordArray.length -1);
        resultPasswordArray.push(passwordArray[randomNumber]);
    }

    blockForPassword.innerHTML = resultPasswordArray.join('');
}

// ----------------------------------------------------------------------------------------------------
function changeRangeValue() {
    rangeInput.addEventListener('change', () => {
        valueRange.innerHTML = rangeInput.value;
    });
}
changeRangeValue()

// --------------------------------------------------------------------------------------------------------
function showHints() {
    hintCircle.forEach((hint, i) => {
        hint.addEventListener('mouseover', () => {
            hintHidden[i].style.display = 'block';
        }
    );
});
}
showHints();

function hideHints() {
    hintCircle.forEach((hint, i) => {
        hint.addEventListener('mouseout', () => {
            hintHidden[i].style.display = 'none';
        }
    );
});
}
hideHints();
// ------------------------------------------------------------------------------------------------------------
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }