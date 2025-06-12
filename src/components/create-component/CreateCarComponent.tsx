import React from 'react';
import Form from "next/form";

const CreateCarComponent = () => {

    const classForm = 'border-1 m-2 block'
    return (
        <div className={'flex justify-center pt-20 bg-black text-white h-screen'}>
           <Form action={''}>
               <input className={classForm} type="text" name='brand' placeholder={'enter brand'}/>
               <input className={classForm} type="number" name='price' placeholder={'enter price'}/>
               <input className={classForm} type="number" name='year' placeholder={'enter year'}/>
               <button className={'border-1 w-42 ml-2'}>send</button>
           </Form>
        </div>
    );
};

export default CreateCarComponent;