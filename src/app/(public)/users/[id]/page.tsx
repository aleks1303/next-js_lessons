import React, {FC} from 'react';
type PropsUser = {
    params: {id: string}
}

const Page:FC<PropsUser> = async ({params}) => {
    const {id} = await params
    return (
        <div>
            User Page {id}
        </div>
    );
};

export default Page;