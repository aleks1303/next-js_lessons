import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IPhotos} from "@/models/IPhotos";

type PropsPhotos = {
    searchParams: Promise<SearchParams>
}

const PhotosPage:FC<PropsPhotos> = async ({searchParams}) => {
    const {data} = await searchParams
    let photos = null;
    if (typeof data === 'string') {
        photos = JSON.parse(data) as IPhotos
    }

    return (
        <>
            {photos && (
                <div>
                    <p>Album: {photos.albumId}</p>
                    <p>{photos.id}. {photos.title}</p>
                </div>
            )}
        </>
    );
};

export default PhotosPage;