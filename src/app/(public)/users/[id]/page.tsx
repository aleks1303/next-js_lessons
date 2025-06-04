import React, {FC} from 'react';
import {Metadata} from "next";

type PropsUser = {
    params: {id: string}
}
export const generateMetadata = async ({params}: PropsUser): Promise<Metadata> => {
    const {id} = await params
    return {
        title: `User page ${id}`
    }
}


const UserPage:FC<PropsUser> = () => {

    // const {id} = params
    return (
        <div>
            UserPage {/*{id}*/}
        </div>
    );
};

export default UserPage;