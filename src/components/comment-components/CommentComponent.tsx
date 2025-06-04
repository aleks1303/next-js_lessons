import React, {FC} from 'react';
import {IComments} from "@/models/IComments";
import Link from "next/link";

type PropsComment = {
    item: IComments
}

const CommentComponent:FC<PropsComment> = ({item}) => {
    return (
        <div>
            <Link href={`/comments/${item.id}`}><p>{item.id}. {item.name}</p></Link>
        </div>
    );
};

export default CommentComponent;