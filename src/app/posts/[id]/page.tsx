import React from 'react';
import {ApiService} from "@/services/api.service";
import {Metadata} from "next";

type PropsPost = {
    params: {id:string}
}

export const generateMetadata = async ({params}:PropsPost): Promise<Metadata> => {
    const {id} = await params
    return {
        title: `Post ${id}`
    }
}

const PostByIdPage = async ({params}:PropsPost) => {
    const {id} = await params
    const post = await ApiService.getPostById(id)
    return (
        <div>
            <p>{post.id}. {post.title} UserId: {post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostByIdPage;