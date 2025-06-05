import React, {FC} from 'react';
import {IUser} from "@/models/IUser";
import Link from "next/link";

type PropsUser = {
    item: IUser
}
const UserComponent:FC<PropsUser> = ({item}) => {
    return (
        <div>
            <Link href={`/users/${item.id}`}>
                {item.id}. {item.name} {item.username}
            </Link>
        </div>
    );
};

export default UserComponent;