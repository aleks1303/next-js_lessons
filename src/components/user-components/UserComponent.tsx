import React, {FC} from 'react';
import {IUsers} from "@/models/IUsers";

type PropsUser = {
    item: IUsers
}

const UserComponent:FC<PropsUser> = ({item}) => {
    return (
        <div>
            {item.id} {item.name}
        </div>
    );
};

export default UserComponent;