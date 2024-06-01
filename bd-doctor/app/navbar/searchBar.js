"use client"
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
export default function SearchBar () {
    return (
        <form className="w-full relative">
            <input type='search' placeholder='Search Doctors' className='w-full placeholder:text-green-900 placeholder:text-[16px] pl-4 py-2 rounded-full bg-white border-2 border-green-900 focus:outline-none'/>
            <button className='absolute right-2 top-1/2 -translate-y-1/2 px-4 bg-white rounded-full'>
                <AiOutlineSearch size={22} color='green'/>
            </button>

        </form>
    )
}