import {NextRequest} from "next/server";

export const middleware = (request:NextRequest) => {
    console.log('middleware');



   // отримаємо токен з cookie, sessionStorage, localStorage,
    // можна отримати інформацію яка локалізація, для того, щоб робити запити на певну url
    //з інформацією необхідної мови


    // const token = 'skdk4jfjdj3jdjdjj55866ej'
    //
    // const response = NextResponse.next({
    //     headers: {
    //         authorization: token
    //     }
    // });
    // return response
//
    // це для того, щоб дістати інфу і на основі її робити запит
// if (locale === 'EN') {
//     fetch() // виконуємо запит
// }
    // return new NextResponse('thisIsForBody', {headers: {'head': 'body'}})



    // що робити, щоб url можна було використовувати різні?
    // для цього працюємо if else
    // є бібліотека Nemo яка це може замінити, але ще не дороблена, поки використовують if else
    if (request.url.startsWith('http://localhost:3000/users')){
        console.log('users store')
    } else if (request.url.includes('auth')) {
        console.log('auth')
    }
    else if (request.url.includes('3000')) {
        console.log('3000')
    }
}


// export const config = {
//     matcher:'/auth'
// }