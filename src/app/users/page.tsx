
//SSG - static side generation
// генерація сторінки відбувається статично після build
// і не оновлюється вона кешується самим next
// використовується коли інформація на сторінці рідко оновлюється

import React from 'react';

type Props = {
    id: number;
    name: string;
    username: string;
}
const UsersPage = async () => {

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())

    return (
        <div>
            {
                users.map((user: Props) => (<div key={user.id}>{user.name}</div>))
            }
        </div>
    );
};

export default UsersPage;