'use client'

import Image from 'next/image'
import Link from 'next/link'
import Search from "@/components/Search";
import { BiUser } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from 'react';

const Header =() => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='flex h-10  w-full items-center top-0 justify-between'>
            <Image src='/Ark 2.svg' alt='' width={71} height={40} className='invert'/>
            
            <div className='hidden md:flex gap-4'>
                <Link href="/men" className='font-bold'>Men</Link>
                <Link href="/women" className='font-bold'>Women</Link>
                <Link href="/news-and-features" className='font-bold'>News & Features</Link>
                <Link href="/store" className='font-bold'>Store</Link>
            </div>

            <div className='hidden md:flex gap-4'>
                <Search/>
                <BiUser size={24} className='cursor-pointer'/>
                <TiShoppingCart size={24} className='cursor-pointer'/>

            </div>
        </div>
    )
}

export default Header