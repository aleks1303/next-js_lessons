import React from 'react';
import {apiService} from "@/services/api.service";
import {IPhotos} from "@/models/IPhotos";
import InfoPhotosComponent from "@/components/photos-components/InfoPhotosComponent";

const PhotosComponent = async () => {

    const photos = await apiService.getAll<IPhotos[]>('/photos')
    return (
        <div>
            {
                photos.map(photo => (<InfoPhotosComponent key={photo.id} item={photo}/>))
            }
        </div>
    );
};

export default PhotosComponent;