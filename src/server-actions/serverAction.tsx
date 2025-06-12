'use server'

import {apiCars} from "@/services/api.service";
import {redirect} from "next/navigation";

export const formCreateCar = async (formData:FormData) => {
    const brand = formData.get('brand') as string;
    const price = Number(formData.get('price'));
    const year = Number(formData.get('year'))

    await apiCars.createCar({brand, price, year})
    redirect('/cars')
}