import React from 'react';
import {ApiService} from "@/services/api.service";

type PropsComment = {
    params: {id:string}
}

const CommentsByIdPage= async ({params}: PropsComment) => {
    const {id} = await params
    const comment = await ApiService.getCommentById(id)
    return (
        <div>
            <p>{comment.id}. {comment.name}: {comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentsByIdPage;