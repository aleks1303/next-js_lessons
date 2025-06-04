import React, {FC} from 'react';
import {IComments} from "@/models/IComments";

type PropsComment = {
    item: IComments
}

const CommentComponent:FC<PropsComment> = ({item}) => {
    return (
        <div>
           <p>{item.id}. {item.name}: {item.email}</p>
            <p>{item.body}</p>
        </div>
    );
};

export default CommentComponent;