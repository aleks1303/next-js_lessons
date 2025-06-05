import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Photos metadata"
};
type Props = { children: React.ReactNode }
const Photos = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default Photos;