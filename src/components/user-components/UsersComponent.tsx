import React from 'react';
import {apiService} from "@/services/api.service";
import {IUser} from "@/models/IUser";
import UserComponent from "@/components/user-components/UserComponent";

const UsersComponent = async () => {

    const users = await apiService.getAll<IUser[]>('/users')

    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} item={user}/>))
            }
        </div>
    );
};

export default UsersComponent;