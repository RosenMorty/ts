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
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' }
];
function sortedArr(obj, key) {
    if (key == 'name') {
        return data.sort((a, b) => {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
    }
    else if (key == 'group') {
        console.log('1: ', obj.filter(x => x.group == 1));
        console.log('2: ', obj.filter(x => x.group == 2));
    }
}
const sort = sortedArr(data, 'group');
console.log(sort);
