import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type PropsUser = {
    searchParams: Promise<SearchParams>
}

const UserPage:FC<PropsUser> = async ({searchParams}) => {

    const {data} = await searchParams
    let object = null;
    if (typeof data === 'string') {
        object = JSON.parse(data) as IUser;
    }
    return (
        <div>
            {
                object && (
                    <div>
                <p>{object.id}. {object.name} {object.username}</p>
                        <p>email: {object.email}</p>
                        <p>phone: {object.phone}</p>
                        <p>{object.address.city} {object.address.street} {object.address.suite}</p>
                        <p>{object.website}</p>
                        <p>{object.website}</p>
                </div>)
            }
        </div>
    );
};

export default UserPage;