import React, {FC} from 'react';
import {IUser} from "@/models/IUser";
import Link from "next/link";

type PropsUser = {
    item: IUser
}

const UserComponent:FC<PropsUser> = ({item}) => {
    return (
        <div>
            <Link href={{pathname: `/users/${item.id.toString()}`, query:{data: JSON.stringify(item)}}}><p>{item.id}. {item.name} {item.username}</p></Link>
        </div>
    );
};

export default UserComponent;