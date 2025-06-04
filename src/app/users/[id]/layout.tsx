import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "UserByIdLayout metadata"
};
type Props = { children: React.ReactNode }
const UserByIdLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default UserByIdLayout;