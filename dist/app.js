'use strict';

function createfonImages() {
    var wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.append(wrapper);

    var circleFonImage = document.createElement('div');
    circleFonImage.classList.add('circle_fon');
    wrapper.append(circleFonImage);

    var containerBlock = document.createElement('div');
    containerBlock.classList.add('container_block');
    wrapper.append(containerBlock);
}
createfonImages();

var wrapper = document.querySelector('.wrapper');
var containerBlock = document.querySelector('.container_block');

function createHeading() {
    var heading = document.createElement('p');
    heading.classList.add('heading');
    heading.innerHTML = 'ГЕНЕРАТОР ПАРОЛЕЙ';
    containerBlock.append(heading);
}
createHeading();

function createPasswordBlock() {
    var passwordBlock = document.createElement('div');
    passwordBlock.classList.add('password_block');
    containerBlock.append(passwordBlock);
    var passwordValue = document.createElement('h2');
    passwordValue.classList.add('password_value');
    passwordValue.innerHTML = 'Ваш пароль';
    passwordBlock.append(passwordValue);
}
createPasswordBlock();

function createMenuContainer(idCheckbox, textMenu, hiddenText, idBox) {
    var menuContainer = document.createElement('div');
    menuContainer.classList.add('menu_container');
    var labelForCheckbox = document.createElement('label');
    labelForCheckbox.classList.add('label');
    menuContainer.append(labelForCheckbox);
    var checkboxMenuBlock = document.createElement('input');
    checkboxMenuBlock.classList.add('checkbox');
    checkboxMenuBlock.type = 'checkbox';
    checkboxMenuBlock.id = idCheckbox;
    labelForCheckbox.append(checkboxMenuBlock);
    var chexkboxSpan = document.createElement('span');
    chexkboxSpan.classList.add = chexkboxSpan;
    labelForCheckbox.append(chexkboxSpan);
    var textMenuBlock = document.createElement('p');
    textMenuBlock.classList.add('menu_p');
    textMenuBlock.classList.add('text_menu_block');
    textMenuBlock.id = idBox;
    textMenuBlock.innerHTML = textMenu;
    menuContainer.append(textMenuBlock);
    var tooltipBlock = document.createElement('div');
    tooltipBlock.classList.add('tooltip_block');
    menuContainer.append(tooltipBlock);
    var tooltipCircle = document.createElement('div');
    tooltipCircle.classList.add('tooltip_circle');
    tooltipCircle.innerHTML = '?';
    tooltipBlock.append(tooltipCircle);
    var tooltipHidden = document.createElement('div');
    tooltipHidden.classList.add('tooltip_hidden');
    tooltipHidden.innerHTML = hiddenText;
    tooltipBlock.append(tooltipHidden);
    containerBlock.append(menuContainer);
}

createMenuContainer('checkboxLangeCir', 'Кириллица', 'а, б, в, г, д, е, ё, ж ...', 'cirillBox');
createMenuContainer('checkboxLangeLat', 'Латинские буквы', 'a, b, c, d, e, f, g, h ...', 'latBox');
createMenuContainer('checkboxLetters', 'Включать прописные буквы', 'А, Б, В, Г, Д, Е, Ё, Ж ...', 'highLettersBox');
createMenuContainer('checkboxSymbols', 'Включать символы', '! @ $ % ^ & * ( ) _ - + . , /', 'symbolBox');
createMenuContainer('checkboxNumbers', 'Включать цифры', '1, 2, 3, 4, 5, 6, 7, 8 ...', 'numbersBox');

function createRange() {
    var rangeContainer = document.createElement('div');
    rangeContainer.classList.add('menu_container');
    containerBlock.append(rangeContainer);

    var rangeText = document.createElement('p');
    rangeText.classList.add('menu_p');
    rangeText.classList.add('range_text');
    rangeText.innerHTML = 'Длина: ';
    rangeContainer.append(rangeText);

    var rangeValue = document.createElement('p');
    rangeValue.classList.add('menu_p');
    rangeValue.classList.add('range_value');
    rangeValue.innerHTML = '1';
    rangeContainer.append(rangeValue);

    var range = document.createElement('input');
    range.type = 'range';
    range.min = 1;
    range.max = 30;
    range.step = 1;
    range.value = 0;
    range.id = 'RangeInput';
    rangeContainer.append(range);
}
createRange();

function createBtnsContainer() {
    var btnsContainer = document.createElement('div');
    btnsContainer.classList.add('menu_container');
    btnsContainer.classList.add('btns_container');
    containerBlock.append(btnsContainer);
}
createBtnsContainer();

var btnsContainer = document.querySelector('.btns_container');

function createBtn(idBtn, valueBtn) {
    var btn = document.createElement('p');
    btn.classList.add('btn');
    btn.id = idBtn;
    btn.innerHTML = valueBtn;
    btnsContainer.append(btn);
}
createBtn('btnGen', 'Сгенерировать');
createBtn('btnCopy', 'Скопировать');

function createLangeChoose() {
    var langChooseBloch = document.createElement('div');
    langChooseBloch.classList.add('lang_choose_block');
    langChooseBloch.innerHTML = 'en';
    wrapper.append(langChooseBloch);
}
createLangeChoose();

function createSelect() {
    var selectsContainer = document.createElement('div');
    selectsContainer.classList.add('selects_container');
    wrapper.append(selectsContainer);
    var select = document.createElement('div');
    select.classList.add('select');
    select.id = 'selectBlock1';
    selectsContainer.append(select);
}
createSelect();

var selectsContainer = document.querySelector('.selects_container');
function creareSelectBlock(idSelectBlock, color, positionY) {
    var selectBlock = document.createElement('div');
    selectBlock.classList.add('select');
    selectBlock.style.display = 'none';
    selectBlock.style.backgroundColor = color;
    selectBlock.style.top = positionY;
    selectBlock.id = idSelectBlock;
    selectsContainer.append(selectBlock);
}
creareSelectBlock('selectBlock2', '#013E59', '45px');
creareSelectBlock('selectBlock3', '#02705C', '65px');
creareSelectBlock('selectBlock4', '#C83C5A', '85px');

var checkboxLangeCir = document.querySelector('#checkboxLangeCir');
checkboxLangeCir.checked = true;