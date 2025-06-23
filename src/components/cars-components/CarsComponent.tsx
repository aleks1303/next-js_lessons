import React from 'react';
import {apiService} from "@/services/api.service";
import CarComponent from "@/components/cars-components/CarComponent";

const CarsComponent = async () => {
    const cars = await apiService.getAllCars()
    return (
        <div>
            {
                cars.map(car => (<CarComponent key={car.id} item={car}/>))
            }
        </div>
    );
};

export default CarsComponent;