let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

let circleFonImage = document.createElement('div');
circleFonImage.classList.add('circle_fon');
wrapper.append(circleFonImage);

let containerBlock = document.createElement('div');
containerBlock.classList.add('container_block');
wrapper.append(containerBlock);

let heading = document.createElement('a');
heading.classList.add('heading');
heading.innerHTML = 'ГЕНЕРАТОР ПАРОЛЕЙ';
containerBlock.append(heading);

let passwordBlock = document.createElement('div');
passwordBlock.classList.add('password_block');
passwordBlock.innerHTML = 'Ваш пароль 1231212321212365412 1111111111';
containerBlock.append(passwordBlock);

let menuContainer = document.createElement('div');
menuContainer.classList.add('menu_container');
let labelForCheckbox = document.createElement('label');
labelForCheckbox.classList.add('label');
menuContainer.append(labelForCheckbox);
let checkboxLangeMenuBlock = document.createElement('input');
checkboxLangeMenuBlock.classList.add('checkbox');
checkboxLangeMenuBlock.type = 'checkbox';
labelForCheckbox.append(checkboxLangeMenuBlock);
let chexkboxSpan = document.createElement('span');
chexkboxSpan.classList.add = (chexkboxSpan);
labelForCheckbox.append(chexkboxSpan);
let textLangeMenuBlock = document.createElement('a');
textLangeMenuBlock.classList.add('menu_p');
textLangeMenuBlock.classList.add('textLangeMenuBlock');
textLangeMenuBlock.innerHTML = 'Кириллица';
menuContainer.append(textLangeMenuBlock);
let tooltipBlock = document.createElement('div');
tooltipBlock.classList.add('tooltip_block');
menuContainer.append(tooltipBlock);
let tooltipCircle = document.createElement('div');
tooltipCircle.classList.add('tooltip_circle');
tooltipCircle.innerHTML = '?';
tooltipBlock.append(tooltipCircle);
let tooltipHidden = document.createElement('div');
tooltipHidden.classList.add('tooltip_hidden');
tooltipHidden.innerHTML = 'а, б, в, г, д, е, ё, ж ...';
tooltipBlock.append(tooltipHidden);
containerBlock.append(menuContainer);


