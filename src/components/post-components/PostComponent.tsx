import React, {FC} from 'react';
import {IPosts} from "@/models/IPosts";
import Link from "next/link";

type PropsPost = {
    item: IPosts
}

const PostComponent:FC<PropsPost> = ({item}) => {
    return (
        <div>
            <Link href={`/posts/${item.id}`}><p>{item.id}. {item.title}</p></Link>
        </div>
    );
};

export default PostComponent;