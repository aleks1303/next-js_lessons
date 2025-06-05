import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/models/IComment";

type PropsComment = {
    searchParams: Promise<SearchParams>
}
const CommentPage:FC<PropsComment> = async ({searchParams}) => {

    const {data} = await searchParams
    let comment = null;
    if (typeof data === 'string') {
        comment = JSON.parse(data) as IComment
    }

    return (
        <>
            { comment && (<div>
                <p>PostId: {comment.postId}</p>
                <p>{comment.id}. {comment.name}</p>
                <p>email: {comment.email}</p>
                <p>{comment.body}</p>
            </div>)

            }
        </>
    );
};

export default CommentPage;