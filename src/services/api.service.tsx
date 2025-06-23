import {ICar} from "@/models/ICar";
import {ICarWithoutId} from "@/models/ICarWithoutId";

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1'

export const apiService = {
    getAllCars: async (): Promise<ICar[]> => {
        return await fetch(`${baseUrl}/cars`)
            .then((response) => response.json())
    },
    createCar: async (car: ICarWithoutId) => {
        return await fetch(`${baseUrl}/cars`, {
           method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        })
            .then((response) => response.json())

    }
}