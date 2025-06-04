import React from 'react';
import {ApiService} from "@/services/api.service";

type PropsUser = {
    params: {id:string}
}

const UserByIdPage = async ({params}:PropsUser) => {

    const {id} = await params
    const user = await ApiService.getUserById(id)
    return (
        <div>
            <p>{user.id}. {user.name} {user.username}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <p>{user.address.city} {user.address.street} {user.address.suite}</p>
            <p>{user.company.name}</p>
            <p>{user.website}</p>
        </div>
    );
};

export default UserByIdPage;