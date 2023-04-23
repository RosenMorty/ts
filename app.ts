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

// enum QuestionStatus {
//     Pubblished = 'published',
//     Draft = 'draft',
//     Deleted = 'deleted',
// }

// async function getFaqs(req:{
//     topicId: number,
//     status: QuestionStatus,
// }): Promise<{
//     question: string;
//     answer: string;
//     tags: string[];
//     likes: number;
//     status: QuestionStatus;
// }[]> {
//     const res = await fetch('/faqs', {
//         method: 'POST',
//         body: JSON.stringify(req)
//     });
//     const data = await res.json();
//     return data;
// }

// interface Ipayment {
//     sum: number,
//     from: number,
//     to: number
// }

// enum PaymentStatus {
//     Success = 'success',
//     Failed = 'failed'
// }

// interface IPaymentRequest extends Ipayment {}

//  interface IDataSuccess extends Ipayment {
//     databaseId: number,
//  }

//  interface IDataFailed {
//     errorMessage: string,
//     errorCode: number
//  }

//  interface IResponseSuccess {
//     status: PaymentStatus.Success,
//     data: IDataSuccess
//  }

//  interface IResponseFailed {
//     status: PaymentStatus.Failed,
//     data: IDataFailed
//  }

//  type f = (res: IResponseSuccess | IResponseFailed) => number;

//  type Res = IResponseSuccess | IResponseFailed;

//  function isSuccess(res: Res): res is IResponseSuccess {
//    if (res.status === PaymentStatus.Success) {
//       return true;
//    }
//    return false;
//  }

//  function getIdFromData(res: Res): number {
//    if (isSuccess(res)) {
//       return res.data.databaseId;
//    } else {
//       throw new Error(res.data.errorMessage)
//    }
//  }

// class User {
//    skills!: string[];

//    addSkill(skill: string): string;
//    addSkill(skill: string[]): void;   
//    addSkill(skillOrSkills: string | string[]): void | string {
//       if (typeof skillOrSkills == 'string') {
//       this.skills.push(skillOrSkills)
//       } else {
//          this.skills.concat(skillOrSkills)
//       }
//    }
// }

// new User().addSkill('')
 

// class Product {
//    id!: number;
//    name!: string;
//    price!: number;
// }

// class Delivery {
//    home!: {
//       data: Date;
//       address: string;
//    }
//    punkt!: {
//       data: Date;
//       Id: number;
//    }
// }

// class Cart extends Delivery {
//    product!: Product[];
//    push(product: Product) {
//       this.product.push(product);
//    }

//    deleteProduct(id: number) {
//       this.product
//       .map((elem) => {
//          if (elem.id == id) {
//             this.product.splice(1);
//          }
//       })
//    }

//    totalPrice() {
//       let semiPrice = 0;
//       this.product
//       .map((sum) => {
//          semiPrice += sum.price;  
//       })
//    }

//    dost(dostavka: string, address: string, data: Date, id: number) {
//       if (dostavka == 'home') {
//          this.home.address = address
//          this.home.data = data;
//       } else if (dostavka == 'point') {
//          this.punkt.Id = id;
//          this.punkt.data = data;
//       }
//    }
// }

// abstract class Logger { 
//    abstract log(message: string): void;

//    printDate(date: Date) {
//       this.log(date.toString());
//    }

// }

// class MyLogger extends Logger {
//    log(message: string): void {
//       console.log(message);
//    }

//    logWithDate(message: string) {
//       this.printDate(new Date());
//       this.log(message);
//    }
// }


// const logger = new MyLogger();
// logger.logWithDate('Сынок ты не прав');

// function toString<T>(data: T): string | undefined {
//    if(Array.isArray(data)) {
//       return data.toString();
//    }
//    switch (typeof data) {
//       case 'string':
//          return data;
//          case 'number':
//          case 'symbol':
//          case 'bigint':
//          case 'boolean':
//          case 'function':
//             return data.toString()
//          case 'object':
//             return JSON.stringify(data);
//          default: 
//          return undefined
//    }
// }

//   console.log(toString(5));


// const data = [
//    { id: 1, name: 'Вася'},
//    { id: 4, name: 'Петя'},
//    { id: 2, name: 'Надя'}
// ];



// interface Idata {
//    id: number; 
//    name: string;
// }

// function logUp<T extends Idata[]>(data: T, sort: 'up' | 'down'): T {
//    if (sort == 'up') {
//       return data.sort((a,b) => {
//          return a.id - b.id;
//       })
//    } else if (sort == 'down') {
//       return data.sort((a,b) => {
//          return b.id - a.id;
//       })
//    } throw new Error('problem with sort')
// }

// console.log(logUp(data, 'up'));

// interface Data {
//    group: number;
//    name: string;
// }

// const data: Data[] = [
//    {group: 1, name: 'a'},
//    {group: 1, name: 'b'},
//    {group: 2, name: 'c'}
// ];

// function sortedArr<T extends Data[], K extends keyof Data>(obj: T, key: K) {
//    if (key == 'name') {
//       return data.sort((a,b) => {
//          if (a.name < b.name) 
//             return -1; 
//          if (a.name > b.name) 
//             return 1;
//          return 0;
//       })
//    } else if (key == 'group') {
//       console.log('1: ', obj.filter(x => x.group == 1));
//       console.log('2: ', obj.filter(x => x.group == 2));
//    }
// }

// const sort = sortedArr(data, 'group')
// console.log(sort)