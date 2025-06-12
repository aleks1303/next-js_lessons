import {ICar} from "@/models/ICar";

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1'

export const apiCars = {
    getAllCars: async ():Promise<ICar[]> => {
        return await fetch(`${baseUrl}/cars`)
            .then((response) => response.json())

    }
}