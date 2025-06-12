import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul className={'flex justify-around m-3'}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/cars'}>cars</Link></li>
                <li><Link href={'/create'}>create</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuComponent;