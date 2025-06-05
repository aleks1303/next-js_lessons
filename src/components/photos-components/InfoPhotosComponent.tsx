import React, {FC} from 'react';
import {IPhotos} from "@/models/IPhotos";
import Link from "next/link";

type PropsPhotos = {
    item: IPhotos
}

const InfoPhotosComponent:FC<PropsPhotos> = ({item}) => {
    return (
        <div>
            <Link href={{pathname:`/photos/${item.id.toString()}`, query:{data: JSON.stringify(item)}}}><p>{item.id}. {item.title}</p></Link>
        </div>
    );
};

export default InfoPhotosComponent;