import React, {FC} from 'react';
import {IPosts} from "@/models/IPosts";

type PropsPost = {
    item: IPosts
}

const PostComponent:FC<PropsPost> = ({item}) => {
    return (
        <div>
            <p>{item.id}. {item.title}</p>
            <p>{item.body}</p>
        </div>
    );
};

export default PostComponent;