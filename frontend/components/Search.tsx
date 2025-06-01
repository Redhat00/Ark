'use client'

import {useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";

const Search = () => {

    const [showSearch, setShowSearch] = useState(false);

  return (
    <>
    <button
        onClick={() => setShowSearch(true)}
        className="text-gray-700 hover:text-black" >
            <CiSearch size={24} className='stroke-1 cursor-pointer'/>
    </button>
    {showSearch && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
          <div className="relative w-full max-w-xl">
            <button
              onClick={() => setShowSearch(false)}
              className=" absolute top-[-3rem] right-0 text-white"
            >
            <RiCloseFill  />
            </button>

            <input
              type="text"
              placeholder="Search..."
              className="w-full px-6 py-4 rounded-md bg-white text-black text-lg outline-none shadow-lg"
              autoFocus
            />
          </div>
        </div>

  )}
    </>
  )
}

export default Search