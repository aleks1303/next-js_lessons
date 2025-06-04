import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "PostByIdLayout metadata"
};
type Props = { children: React.ReactNode }
const PostByIdLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default PostByIdLayout;