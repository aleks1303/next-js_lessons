import React, {FC} from 'react';
import {IComment} from "@/models/IComment";
import Link from "next/link";

type PropsComment = {
    item: IComment
}

const CommentComponent:FC<PropsComment> = ({item}) => {
    return (
        <div>
            <Link href={{pathname: `/comments/${item.id.toString()}`, query:{data: JSON.stringify(item)}}}>
                <p>{item.id}. {item.name}</p>
            </Link>
        </div>
    );
};

export default CommentComponent;