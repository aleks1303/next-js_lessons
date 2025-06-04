import React from 'react';
import {ApiService} from "@/services/api.service";
import PostComponent from "@/components/post-components/PostComponent";

const PostsComponent = async () => {
    const posts = await ApiService.getAllPosts()
    return (
        <div>
            {posts.map(post =>(<PostComponent key={post.id} item={post}/>))}
        </div>
    );
};

export default PostsComponent;