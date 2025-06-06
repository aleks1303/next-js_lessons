import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul className={'flex justify-around'}>
                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/form'}>form</Link></li>
                <li><Link href={'/submit'}>submit</Link></li></ul>
            <hr/>
        </div>
    );
};

export default Menu;