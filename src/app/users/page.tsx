
//ISR - incremental static regeneration
//Інкрементальна статична регенерація
// сам задаєш коли буде відбуватися регенерація

import React from 'react';
type Props = {
    id: number,
    name:string,
    username:string
}
const UsersPage = async () => {

    //задаєш в секундах серверну регенерацію

    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate:10}})
    //     .then((response) => response.json())



    // робиш з статичної динамічну генерацію, постійно оновлюється

    const users = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-cache"})
        .then((response) => response.json())
    return (
        <div>

            <h2>{Date.now()}</h2>

        {users.map((user:Props) => <div key={user.id}>{user.id}. {user.name} {user.username}</div>)}
</div>

    );
};

export default UsersPage;