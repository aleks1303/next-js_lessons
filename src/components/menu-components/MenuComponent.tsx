import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul className={'flex justify-around'}>
                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/cars'}>cars</Link></li>
                <li><Link href={'/create'}>create</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;