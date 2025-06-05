import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Comment metadata"
};
type Props = { children: React.ReactNode }
const Comment = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default Comment;