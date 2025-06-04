import React from 'react';
import {ApiService} from "@/services/api.service";
import UserComponent from "@/components/user-components/UserComponent";

const UsersComponent = async () => {
    const users = await ApiService.getAllUsers()
    return (
        <div>
            {users.map(user => (<UserComponent key={user.id} item={user}/>))}
        </div>
    );
};

export default UsersComponent;