import React from 'react';
import Form from "next/form";

const FormPage = () => {
    return (
        <div>
            {/*<form action="/submit">*/}
            {/*    <input className={'border-1'} type="text" name={'name'}/>*/}
            {/*    <button>sent</button>*/}
            {/*</form>*/}

            <Form action={'/submit'}>
                <input className={'border-1'} type="text" name={'name'} placeholder={'enter your name'}/>
                <button>sent</button>
            </Form>

        </div>
    );
};

export default FormPage;