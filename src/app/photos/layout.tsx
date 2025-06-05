import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "PhotosLayout metadata"
};
type Props = { children: React.ReactNode }
const PhotosLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default PhotosLayout;