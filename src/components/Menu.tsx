import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul className={'flex justify-around'}>
                <li><Link href={'/users'}>users</Link></li>

            </ul>
        </div>
    );
};

export default Menu;