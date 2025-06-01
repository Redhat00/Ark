import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 md:px-12 py-12">
  <div className="flex flex-col md:flex-row justify-between gap-12 py-6">
    
    <div>
      <h3 className="text-2xl font-extrabold">Ark <br /> <span className="text-white">Collections</span></h3>
      <p className="mt-4 text-sm">Ready to up <br /> your fashion game?</p>
    </div>

    <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
      <ul className="space-y-1">
        <Link href=''><li>Home</li></Link>
        <Link href=''><li>Pricing</li></Link>
        <Link href=''><li>Style guide</li></Link>
        <Link href=''><li>Features</li></Link>
        <Link href=''><li>Trending</li></Link>
      </ul>
      <ul className="space-y-1">
        <Link href=''><li>About</li></Link>
        <Link href=''><li>Contact Us</li></Link>
        <Link href=''><li>Blog</li></Link>
        <Link href=''><li>Help center</li></Link>
        <Link href=''><li>Support</li></Link>
      </ul>
    </div>
  </div>

    <hr className="flex-grow border-gray-300" />

  <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm gap-4">
    <p className="text-gray-400">Copyright 2025 Ark Collections. All rights reserved</p>
    <div className="flex gap-4 text-white">
      <a href="#"><i className="fab fa-instagram" /></a>
      <a href="#"><i className="fab fa-twitter" /></a>
      <a href="#"><i className="fab fa-youtube" /></a>
    </div>
  </div>
</div>
  )
}

export default Footer