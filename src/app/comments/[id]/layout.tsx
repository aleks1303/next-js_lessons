import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "CommentsByIdLayout metadata"
};
type Props = { children: React.ReactNode }
const CommentsByIdLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default CommentsByIdLayout;