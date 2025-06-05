import React from 'react';
import {apiService} from "@/services/api.service";
import {IComment} from "@/models/IComment";
import CommentComponent from "@/components/comment-components/CommentComponent";

const CommentsComponent = async () => {
    const comments = await apiService.getAll<IComment[]>('/comments')
    return (
        <div>
            {
                comments.map(comment => (<CommentComponent key={comment.id} item={comment}/>))
            }
        </div>
    );
};

export default CommentsComponent;