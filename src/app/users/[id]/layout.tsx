import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "User metadata"
};
type Props = { children: React.ReactNode }
const User = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default User;