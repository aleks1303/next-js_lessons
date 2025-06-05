import React, {FC} from 'react';
import {IPost} from "@/models/IPost";
import Link from "next/link";

type PropsPost = {
    item: IPost
}

const PostComponent:FC<PropsPost> = ({item}) => {
    return (
        <div className={'border-1'}>
            <Link href={`/posts/${item.id}`}>{item.id}. {item.title}</Link>
        </div>
    );
};

export default PostComponent;