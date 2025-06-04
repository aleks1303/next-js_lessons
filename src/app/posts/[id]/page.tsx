import React from 'react';
import {ApiService} from "@/services/api.service";

type PropsPost = {
    params: {id:string}
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