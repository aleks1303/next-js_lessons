
// const users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olga', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olga', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];


// ця функція має в аргументах об'єкти request and response
// які мають всю інформацію про цю функцію


// дивитись ще posts
export async function GET(request: Request, response: Response){

    //можна доступитися до headers
    response.headers.set('Accept', 'application/json')


    // const users = await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json())
    //
    // console.log(request)
    // console.log(response)


    // це перевірка - чи працює url
    return Response.json({message: request.url, status: 200})
}

export async function POST () {
    console.log('this is post method')
    return Response.json('this is post method from server')
}