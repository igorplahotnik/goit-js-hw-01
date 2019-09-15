'use strict';
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let costDelivery;
let countrySelection;

countrySelection = prompt('Укажите страну для доставки товара').toLowerCase();

switch (countrySelection) {

    case 'китай':
        costDelivery = 100;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
        break;
    case 'южная америка':
        costDelivery = 250;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
        break;
    case 'австралия ':
        costDelivery = 170;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
        break;
    case 'индия':
        costDelivery = 80;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
        break;
    case 'ямайка':
        costDelivery = 120;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
        break;
    default:
        console.log('В вашей стране доставка не доступна');
        break;
}