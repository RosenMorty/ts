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

interface Ipayment {
    sum: number,
    from: number,
    to: number
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IPaymentRequest extends Ipayment {}

 interface IDataSuccess extends Ipayment {
    databaseId: number,
 }

 interface IDataFailed {
    errorMessage: string,
    errorCode: number
 }

 interface IResponseSuccess {
    status: PaymentStatus.Success,
    data: IDataSuccess
 }

 interface IResponseFailed {
    status: PaymentStatus.Failed,
    data: IDataFailed
 }


 