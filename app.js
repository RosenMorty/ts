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
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
