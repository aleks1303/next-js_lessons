import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "FormLayout metadata"
};
type Props = { children: React.ReactNode }
const FormLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default FormLayout;