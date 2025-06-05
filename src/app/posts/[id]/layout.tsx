import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Post metadata"
};
type Props = { children: React.ReactNode }
const Post = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default Post;