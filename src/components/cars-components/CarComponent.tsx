import React, {FC} from 'react';
import {ICar} from "@/models/ICar";
type PropsCar = {
    item: ICar
}

const CarComponent:FC<PropsCar> = ({item}) => {
    return (
        <div>
            <p>{item.id}. {item.brand}</p>
            <p>price: {item.price}</p>
            <p>year: {item.year}</p>
            <hr/>
        </div>
    );
};

export default CarComponent;