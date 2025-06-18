import React from 'react';
type Props = {
    id:number,
    name:string
}
const UsersPage = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())

    return (
        <div>
            {
                users.map((user: Props) => <div key={user.id}>{user.id}. {user.name}</div>)
            }
        </div>
    );
};

export default UsersPage;