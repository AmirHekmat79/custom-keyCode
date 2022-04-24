let $ = document;
let themeBtnElement = $.querySelector('.themeBtn');
let h2Element = $.querySelector('.h2Element');
let keyCodeElement = $.querySelector('.keyCode');
let eventDataContentElement = $.querySelector('.eventDataContent');
let h6Element = $.querySelector('.h6Elem');
let cardHeader1 = $.querySelector('.header1');
let cardHeader2 = $.querySelector('.header2');
let cardHeader3 = $.querySelector('.header3');
let cardHeader4 = $.querySelector('.header4');
let cardBody1 = $.querySelector('.body1');
let cardBody2 = $.querySelector('.body2');
let cardBody3 = $.querySelector('.body3');
let cardBody4 = $.querySelector('.body4');
let DevInfoElement = $.querySelector('.DevInfo');
let cardBodyInner1 = $.querySelector('.cardBodyInner1');
let cardBodyInner2 = $.querySelector('.cardBodyInner2');
let cardBodyInner3 = $.querySelector('.cardBodyInner3');
let cardBodyInner4 = $.querySelector('.cardBodyInner4');
let themeFlag = 1;
$.body.style.backgroundColor = '#eee';
h2Element.style.backgroundColor = '#FFFDF7';
h2Element.style.color = '#424242';
keyCodeElement.style.color = '#424242';
cardHeader1.style.backgroundColor = '#59C3C3';
cardHeader2.style.backgroundColor = '#59C3C3';
cardHeader3.style.backgroundColor = '#59C3C3';
cardHeader4.style.backgroundColor = '#59C3C3';
cardHeader1.style.color = '#424242';
cardHeader2.style.color = '#424242';
cardHeader3.style.color = '#424242';
cardHeader4.style.color = '#424242';


cardBody1.style.color = '#424242';
cardBody2.style.color = '#424242';
cardBody3.style.color = '#424242';
cardBody4.style.color = '#424242';
cardBody1.style.backgroundColor = '#FFFFFF';
cardBody2.style.backgroundColor = '#FFFFFF';
cardBody3.style.backgroundColor = '#FFFFFF';
cardBody4.style.backgroundColor = '#FFFFFF';

h6Element.style.color = '#424242';
DevInfoElement.style.color = '#2980b9';
keyCodeElement.style.display = 'none';
themeBtnElement.addEventListener('click', function () {
    if (themeFlag) {
        $.body.style.backgroundColor = '#424242';
        h2Element.style.backgroundColor = 'gray';
        h2Element.style.color = '#eee';
        keyCodeElement.style.color = '#FFFDF7';
        h6Element.style.color = '#eee';
        DevInfoElement.style.color = '#FFFD28';
        cardHeader1.style.color = '#eee';
        cardHeader2.style.color = '#eee';
        cardHeader3.style.color = '#eee';
        cardHeader4.style.color = '#eee';


        cardHeader1.style.backgroundColor = '#4062BB';
        cardHeader2.style.backgroundColor = '#4062BB';
        cardHeader3.style.backgroundColor = '#4062BB';
        cardHeader4.style.backgroundColor = '#4062BB';
        cardBody1.style.color = '#eee';
        cardBody2.style.color = '#eee';
        cardBody3.style.color = '#eee';
        cardBody4.style.color = '#eee';
        cardBody1.style.backgroundColor = '#A39B8B';
        cardBody2.style.backgroundColor = '#A39B8B';
        cardBody3.style.backgroundColor = '#A39B8B';
        cardBody4.style.backgroundColor = '#A39B8B';
        themeBtnElement.innerHTML = 'Light theme';
        themeFlag = 0;
    } else {
        $.body.style.backgroundColor = '#eee';
        h2Element.style.backgroundColor = '#FFFDF7';
        h2Element.style.color = '#424242';
        keyCodeElement.style.color = '#424242';
        h6Element.style.color = '#424242';
        DevInfoElement.style.color = '#2980b9';
        cardHeader1.style.color = '#424242';
        cardHeader2.style.color = '#424242';
        cardHeader3.style.color = '#424242';
        cardHeader4.style.color = '#424242';
        cardHeader1.style.backgroundColor = '#59C3C3';
        cardHeader2.style.backgroundColor = '#59C3C3';
        cardHeader3.style.backgroundColor = '#59C3C3';
        cardHeader4.style.backgroundColor = '#59C3C3';
        cardBody1.style.color = '#424242';
        cardBody2.style.color = '#424242';
        cardBody3.style.color = '#424242';
        cardBody4.style.color = '#424242';
        cardBody1.style.backgroundColor = '#FFFFFF';
        cardBody2.style.backgroundColor = '#FFFFFF';
        cardBody3.style.backgroundColor = '#FFFFFF';
        cardBody4.style.backgroundColor = '#FFFFFF';
        themeBtnElement.innerHTML = 'Dark theme';
        themeFlag = 1;
    }
})


$.body.addEventListener('keydown', function (event) {
    event.preventDefault();
    h2Element.style.display = 'none';
    keyCodeElement.style.display = 'block';
    eventDataContentElement.style.display = 'block';
    keyCodeElement.innerHTML = event.which;
    cardBodyInner1.innerHTML = event.key ;
    cardBodyInner2.innerHTML = event.location;
    cardBodyInner3.innerHTML = event.which;
    cardBodyInner4.innerHTML = event.code;
})