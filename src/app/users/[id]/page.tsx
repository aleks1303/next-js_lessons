import React, {FC} from 'react';

//ssr - server side rendering
// сторінка робить render на стороні сервера і передає клієнту
//при кожному запити відбувається render сторінки
// seo - це добрий варіант
// навантаження на server - поганий варіант


type Props = {
params: Promise<{ [key: string]: string | string[] | undefined}>
}

const UserPage:FC<Props> = async ({params}) => {
    const id = (await params).id
    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) => response.json())

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default UserPage;