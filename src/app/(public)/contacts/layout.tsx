import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "ContactsLayout metadata"
};

type Props = { children: React.ReactNode }
const ContactsLayout = ({children}: Props) => {
    return (
        <>
            ContactsLayout
            {children}
        </>
    );
};
export default ContactsLayout;