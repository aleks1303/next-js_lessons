import React from 'react';
import {apiService} from "@/services/api.service";
import {IPost} from "@/models/IPost";
import PostComponent from "@/components/post-components/PostComponent";

const PostsComponent = async () => {

    const posts = await apiService.getAll<IPost[]>('/posts')
    return (
        <div>
            {
                posts.map(post => (<PostComponent key={post.id} item={post}/>))
            }
        </div>
    );
};

export default PostsComponent;