function createfonImages() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.append(wrapper);

    let circleFonImage = document.createElement('div');
    circleFonImage.classList.add('circle_fon');
    wrapper.append(circleFonImage);

    let containerBlock = document.createElement('div');
    containerBlock.classList.add('container_block');
    wrapper.append(containerBlock);
}
createfonImages()

let wrapper = document.querySelector('.wrapper');
let containerBlock = document.querySelector('.container_block');

function createHeading() {
    let heading = document.createElement('p');
    heading.classList.add('heading');
    heading.innerHTML = 'ГЕНЕРАТОР ПАРОЛЕЙ';
    containerBlock.append(heading);
}
createHeading()

function createPasswordBlock() {
    let passwordBlock = document.createElement('div');
    passwordBlock.classList.add('password_block');
    passwordBlock.innerHTML = 'Ваш пароль 1231212321212365412';
    containerBlock.append(passwordBlock);
}
createPasswordBlock();

function createMenuContainer(idCheckbox, textMenu, hiddenText) {
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu_container');
    let labelForCheckbox = document.createElement('label');
    labelForCheckbox.classList.add('label');
    menuContainer.append(labelForCheckbox);
    let checkboxMenuBlock = document.createElement('input');
    checkboxMenuBlock.classList.add('checkbox');
    checkboxMenuBlock.type = 'checkbox';
    checkboxMenuBlock.id = idCheckbox;
    labelForCheckbox.append(checkboxMenuBlock);
    let chexkboxSpan = document.createElement('span');
    chexkboxSpan.classList.add = (chexkboxSpan);
    labelForCheckbox.append(chexkboxSpan);
    let textMenuBlock = document.createElement('p');
    textMenuBlock.classList.add('menu_p');
    textMenuBlock.classList.add('text_menu_block');
    textMenuBlock.innerHTML = textMenu;
    menuContainer.append(textMenuBlock);
    let tooltipBlock = document.createElement('div');
    tooltipBlock.classList.add('tooltip_block');
    menuContainer.append(tooltipBlock);
    let tooltipCircle = document.createElement('div');
    tooltipCircle.classList.add('tooltip_circle');
    tooltipCircle.innerHTML = '?';
    tooltipBlock.append(tooltipCircle);
    let tooltipHidden = document.createElement('div');
    tooltipHidden.classList.add('tooltip_hidden');
    tooltipHidden.innerHTML = hiddenText;
    tooltipBlock.append(tooltipHidden);
    containerBlock.append(menuContainer)
}

createMenuContainer('checkboxLangeCir','Кириллица', 'а, б, в, г, д, е, ё, ж ...');
createMenuContainer('checkboxLangeLat','Латинские буквы', 'a, b, c, d, e, f, g, h ...');
createMenuContainer('checkboxLetters','Включать прописные буквы', 'А, Б, В, Г, Д, Е, Ё, Ж ...');
createMenuContainer('checkboxSymbols','Включать символы', '! @ $ % ^ & * ( ) _ - + . , /');
createMenuContainer('checkboxNumbers', 'Включать цифры', '1, 2, 3, 4, 5, 6, 7, 8 ...');

function createRange() {
    let rangeContainer = document.createElement('div');
    rangeContainer.classList.add('menu_container');
    containerBlock.append(rangeContainer);

    let rangeText = document.createElement('p');
    rangeText.classList.add('menu_p');
    rangeText.classList.add('range_text');
    rangeText.innerHTML = 'Длина: ';
    rangeContainer.append(rangeText);

    let rangeValue = document.createElement('p');
    rangeValue.classList.add('menu_p');
    rangeValue.classList.add('range_value');
    rangeValue.innerHTML = '00';
    rangeContainer.append(rangeValue);

    let range = document.createElement('input');
    range.type = 'range';
    range.min = 0;
    range.max = 30;
    range.step = 1;
    range.value = 0;
    rangeContainer.append(range);
    
}   
createRange();

function createBtnsContainer() {
    let btnsContainer = document.createElement('div');
    btnsContainer.classList.add('menu_container');
    btnsContainer.classList.add('btns_container');
    containerBlock.append(btnsContainer);
}
createBtnsContainer();

let btnsContainer = document.querySelector('.btns_container');

function createBtn(idBtn, valueBtn) {
    let btn = document.createElement('p');
    btn.classList.add('btn');
    btn.id = idBtn;
    btn.innerHTML = valueBtn;
    btnsContainer.append(btn);
}
createBtn('btnGen', 'Сгенерировать');
createBtn('btnCopy', 'Скопировать');

function createLangeChoose() {
    let langChooseBloch = document.createElement('div');
    langChooseBloch.classList.add('lang_choose_block');
    langChooseBloch.innerHTML = 'en';
    wrapper.append(langChooseBloch);
}
createLangeChoose();

function createSelect() {
    let select = document.createElement('div');
    select.classList.add('select');
    wrapper.append(select);
}
createSelect();

function creareSelectBlock(idSelectBlock, color, positionY) {
    let selectBlock = document.createElement('div');
    selectBlock.classList.add('select');
    selectBlock.style.display = 'none';
    selectBlock.style.backgroundColor = color;
    selectBlock.style.top = positionY;
    selectBlock.id = idSelectBlock;
    wrapper.append(selectBlock);
}
creareSelectBlock('selectBlock1', '#013E59', '45px');
creareSelectBlock('selectBlock2', '#02705C', '65px');
creareSelectBlock('selectBlock3', '#C83C5A', '85px');
























let checkboxLangeCir = document.querySelector('#checkboxLangeCir');
checkboxLangeCir.checked= true;