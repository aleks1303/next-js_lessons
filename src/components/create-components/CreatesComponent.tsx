// import React from 'react';
// import Form from "next/form";
// import {formCreateCar} from "@/server-actions/serverAction";
//
// const CreateCarComponent = () => {
//
//     const classForm = 'border-1 m-2 block'
//     return (
//         <div className={'flex justify-center pt-20 bg-black text-white h-screen'}>
//             <Form action={formCreateCar}>
//                 <input className={classForm} type="text" name='brand' placeholder={'enter brand'}/>
//                 <input className={classForm} type="number" name='price' placeholder={'enter price'}/>
//                 <input className={classForm} type="number" name='year' placeholder={'enter year'}/>
//                 <button className={'border-1 w-42 ml-2'}>send</button>
//             </Form>
//         </div>
//     );
// };
//
// export default CreateCarComponent;

'use client'

import React from 'react';
import {useForm} from "react-hook-form";

import {ICarWithoutId} from "@/models/ICarWithoutId";
import {apiService} from "@/services/api.service";

const CreatesComponent = () => {
    const {handleSubmit, register} = useForm<ICarWithoutId>();
    const classForm = 'border-1 m-2 block'
    return (
        <div className={'flex justify-center pt-20 bg-black text-white h-screen'}>
            <form onSubmit={handleSubmit(apiService.createCar)}>
                <input className={classForm} type="text"{...register('brand')} placeholder={'enter brand'}/>
                 <input className={classForm} type="number" {...register('price')} placeholder={'enter price'}/>
                 <input className={classForm} type="number" {...register('year')} placeholder={'enter year'}/>
                 <button className={'border-1 w-42 ml-2'}>send</button>
            </form>
        </div>
    );
};

export default CreatesComponent;


