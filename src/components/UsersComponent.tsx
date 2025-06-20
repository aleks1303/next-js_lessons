import React from 'react';
import {apiService} from "@/services/api.service";

const UsersComponent = async () => {
    const users = await apiService.getAllUsers()
    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.id}. {user.name} {user.username}</div>)
            }
        </div>
    );
};

export default UsersComponent;