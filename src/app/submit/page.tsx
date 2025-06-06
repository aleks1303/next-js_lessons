import React, {FC} from 'react';

type Props = {
searchParams: Promise<{ [key: string]: string | string[] | undefined}>
}



const SubmitPage:FC<Props> = async ({searchParams}) => {
    const nameForm = await searchParams

    return (
        <div>
            Це моє ім`я: {nameForm.name}
        </div>
    );
};

export default SubmitPage;