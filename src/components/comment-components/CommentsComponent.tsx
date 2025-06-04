import React from 'react';
import {ApiService} from "@/services/api.service";
import CommentComponent from "@/components/comment-components/CommentComponent";

const CommentsComponent = async () => {
    const comments = await ApiService.getAllComments()
    return (
        <div>
            {comments.map(comment => (<CommentComponent key={comment.id} item={comment}/>))}
        </div>
    );
};

export default CommentsComponent;