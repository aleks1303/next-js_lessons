import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div className={'m-3'}>
            <ul className={'flex justify-around'}>
                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/users'}>users</Link></li>
                <li><Link href={'/posts'}>posts</Link></li>
                <li><Link href={'/comments'}>comments</Link></li>
                <li><Link href={'/photos'}>photos</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;