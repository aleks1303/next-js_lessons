import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "CreateCarLayout metadata"
};
type Props = { children: React.ReactNode }
const CreateCarLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};
export default CreateCarLayout;