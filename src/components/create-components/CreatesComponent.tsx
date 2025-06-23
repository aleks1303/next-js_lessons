
'use client'

import React from 'react';
import {useForm} from "react-hook-form";

import {ICarWithoutId} from "@/models/ICarWithoutId";
import {apiService} from "@/services/api.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "@/validator/CarValidator";
import {useRouter} from "next/navigation";

const CreatesComponent = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<ICarWithoutId>({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    });
    const router = useRouter()
    const createAndRouter = async (car:ICarWithoutId) => {
       await apiService.createCar(car);
       router.push('/cars')
    }
    const classForm = 'border-1 m-2 block'
    return (
        <div className={'flex justify-center pt-20 bg-black text-white h-screen'}>
            <form onSubmit={handleSubmit(createAndRouter)}>
                <label>
                    <input className={classForm} type="text"{...register('brand')} placeholder={'enter brand'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                    <input className={classForm} type="number" {...register('price')} placeholder={'enter price'}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                    <input className={classForm} type="number" {...register('year')} placeholder={'enter year'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                 <button className={'border-1 w-42 ml-2'}>send</button>
            </form>
        </div>
    );
};

export default CreatesComponent;


