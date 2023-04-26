"use strict";
// let info: {
//     officeId: number;
//     isOpened: boolean;
//     contacts: {
//         phone: string;
//         email: string;
//         address: {
//             city: string;
//         }
//     }
// } = {
//     "officeId": 45,
//     "isOpened": false,
//     "contacts": {
//         "phone": "+79102833223",
//         "email": "my@email.ru",
//         "address": {
//             "city": "Москва"
//         }
//     }
// }
const form = {
    name: 'Васяныч',
    password: '123'
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длиннее 5 символов' }
};
