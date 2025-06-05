import React, {FC} from 'react';
import {IComment} from "@/models/IComment";
import Link from "next/link";

type PropsComment = {
    item: IComment
}

const CommentComponent:FC<PropsComment> = ({item}) => {
    return (
        <div>
            <Link href={`/comments/${item.id}`}>{item.id}. {item.name}</Link>
        </div>
    );
};

export default CommentComponent;