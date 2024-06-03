'use client'
import React, { useState } from 'react';
import { FiActivity } from "react-icons/fi";

const SearchBarHome = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
  <div className='flex flex-col gap-4'>
      <div className="flex gap-4 items-center">
    <div className="bg-white p-2 rounded-[50%] border-2 border-blue-900">
    <div className="bg-blue-900 p-4 rounded-[50%]">
        <FiActivity color="white" size={20}/>
      </div>
    </div>
      <div>
        <p className="text-[20px] text-[#fff] font-[700]">Live Doctors</p>
        <span className="text-[20px] text-[#fff] font-[700]">500</span>
      </div>
    </div>
    <div className="bg-[#003A9B] p-6 rounded-lg w-[1000px] grid grid-cols-6 gap-2">
      <input
        type="text"
        placeholder="Search Doctors..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className='border-2 border-black col-span-3 rounded-lg px-4 py-2 text-[18px] text-[#2D2D2D] font-[600]'
      />
      <select name="" id="" className='col-span-2 text-[16px] text-[#2D2D2D] font-[500] py-[2px] pl-2 rounded-lg h-[44px]'>
        <option value="" className=''>cardiologist</option>
        <option value="">cardiologist</option>
        <option value="">cardiologist</option>
        <option value="">cardiologist</option>
      </select>
      <button type="submit" className='col-span-1 bg-[#b8dbb8] hover:bg-[#43a047] text-[#3d3d3d] text-[20px] rounded-lg px-4 h-[44px]'>Search</button>
    </div>
  </div>
  );
};

export default SearchBarHome;
