import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/models/IPost";

type PropsPost = {
    searchParams: Promise<SearchParams>
}

const PostPage:FC<PropsPost> =  async ({searchParams}) => {

    const {data} = await searchParams
    let object = null
    if (typeof data === 'string'){
        object = JSON.parse(data) as IPost
    }

    return (
        <div>
            {object && (
                <div>
                    <p>UserId: {object.userId}</p>
                    <p>{object.id}. {object.title}</p>
                    <p>{object.body}</p>
                </div>)
            }
        </div>
    );
};

export default PostPage;