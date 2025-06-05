import React, {FC} from 'react';
import {IPost} from "@/models/IPost";
import Link from "next/link";

type PropsPost = {
    item: IPost
}

const PostComponent:FC<PropsPost> = ({item}) => {
    return (
        <div>
            <Link href={{pathname: `/posts/${item.id.toString()}`, query:{data: JSON.stringify(item)}}}>
                <p>{item.id}. {item.title}</p>
            </Link>
        </div>
    );
};

export default PostComponent;