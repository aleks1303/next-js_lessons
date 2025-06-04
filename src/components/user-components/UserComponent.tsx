import React, {FC} from 'react';
import {IUsers} from "@/models/IUsers";
import Link from "next/link";

type PropsUser = {
    item: IUsers
}

const UserComponent:FC<PropsUser> = ({item}) => {
    return (
        <div>
            <Link href={`/users/${item.id}`}>{item.id} {item.name}</Link>
        </div>
    );
};

export default UserComponent;