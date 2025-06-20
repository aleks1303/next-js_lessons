import React from 'react';
import {apiService} from "@/services/api.service";

const PostsComponent = async () => {

    const posts = await apiService.getAllPosts()
    return (
        <div>
            {
                posts.map(post => <div key={post.id}>{post.id}. {post.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;