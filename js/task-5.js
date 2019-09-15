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

// let costDelivery;
// let countrySelection;

// countrySelection = prompt('Укажите страну для доставки товара').toLowerCase();

// switch (countrySelection) {

//     case 'китай':
//         costDelivery = 100;
//         console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
//         break;
//     case 'южная америка':
//         costDelivery = 250;
//         console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
//         break;
//     case 'австралия ':
//         costDelivery = 170;
//         console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
//         break;
//     case 'индия':
//         costDelivery = 80;
//         console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
//         break;
//     case 'ямайка':
//         costDelivery = 120;
//         console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);
//         break;
//     default:
//         console.log('В вашей стране доставка не доступна');
//         break;
// }


const PRINT_COUNTRY = 'Напишите название страны в которую нужно доставить товар';
const CANCEL = 'Отменено пользователем!';
const NOT_DELIVERY = 'В вашей стране доставка не доступна';

let message = prompt(PRINT_COUNTRY);
let credite = 0;


if (message === null) {
    message = CANCEL;
} else {
    const countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

    switch (countryName) {
        case 'Китай':
            credite = 100;
            break;

        case 'Южная америка':
            credite = 250;
            break;

        case 'Австралия':
            credite = 170;
            break;

        case 'Индия':
            credite = 80;
            break;
        case 'Ямайка':
            credite = 120;
            break;
        default:
            message = NOT_DELIVERY;
    }
}

if (prise > 0) {
    message = `Доставка в ${countryName} будет стоить ${credite} кредитов`;
}
alert(message);