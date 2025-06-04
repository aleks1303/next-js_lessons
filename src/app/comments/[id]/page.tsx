import React from 'react';
import {ApiService} from "@/services/api.service";
import {Metadata} from "next";

type PropsComment = {
    params: {id:string}
}
export const generateMetadata = async ({params}:PropsComment): Promise<Metadata> => {
const {id} = await params
    return {
    title: `Comment ${id}`
    }
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