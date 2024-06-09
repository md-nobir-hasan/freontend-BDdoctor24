'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { FiActivity } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [category, setCategory] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Add state for dropdown visibility
  const router = useRouter();

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownVisible(true); // Show dropdown when input changes
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const pathname = '/dashboard';
    const query = {
      searchTerm: searchTerm || '',
      category: category || ''
    };

    try {
      router.push({
        pathname,
        query,
      });
    } catch (error) {
      console.error('Error navigating:', error);
    }

    setFilteredDoctors(
      doctors.filter(doctor =>
        doctor.name && doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("http://admin.treatmentopportunity.com/api/categories");

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log('Categories:', data);
        setOptions(data.data.map(item => ({ label: item.title, value: item.title })));
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();

    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://admin.treatmentopportunity.com/api/doctors");

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log('Doctors:', data);
        setDoctors(data.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    setFilteredDoctors(
      doctors.filter(doctor =>
        doctor.name && doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, doctors]);

  return (
    <div>
      <div className="bg-white">
        <nav className="flex justify-between items-center px-12 py-4 shadow-lg">
          <div className="">
            <Link href="/dashboard">
              <h1 className="text-[#003A9B] text-[26px] font-[700] border-b-[1px] border-black">
                bdDoctors24.com
              </h1>
            </Link>
            <p className="text-[#2D2D2D] text-[16px] font-[500]">
              ALL SPECIALTY DOCTORS IN BANGLADESH
            </p>
          </div>
          <div>
            <ul className="flex justify-around">
              <li className="text-[#2D2D2D] text-[20px] font-[600] px-6 py-2 hover:text-[#164081] hover:bg-cyan-100 cursor-pointer">
                Find Doctors
              </li>
              <li className="text-[#2D2D2D] text-[20px] font-[600] px-6 py-2 hover:text-[#164081] hover:bg-cyan-100 cursor-pointer">
                About us
              </li>
              <li className="text-[#2D2D2D] text-[20px] font-[600] px-6 py-2 hover:text-[#164081] hover:bg-cyan-100 cursor-pointer">
                For Doctors
              </li>
              <li className="text-[#2D2D2D] text-[20px] font-[600] px-6 py-2 hover:text-[#164081] hover:bg-cyan-100 cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="background-img h-[650px]">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center mt-10 w-[700px]">
            <span className="text-[#fff] text-[34px] font-[700]">
              Find doctors and specialties and book your
            </span>
            <span className="text-[#fff] text-[34px] font-[700]">
              appointment now
            </span>
            <p className="text-[#fff] text-[20px] font-[600] mt-4">
              Experts from all Bangladesh medical fields in one place
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-[50vh] m-0">
          <div className='flex flex-col gap-4 relative'>
            <div className="flex gap-4 items-center">
              <div className="bg-white p-2 rounded-[50%] border-2 border-blue-900">
                <div className="bg-blue-900 p-4 rounded-[50%]">
                  <FiActivity color="white" size={20} />
                </div>
              </div>
              <div>
                <p className="text-[20px] text-[#fff] font-[700]">Live Doctors</p>
                <span className="text-[20px] text-[#fff] font-[700]">500</span>
              </div>
            </div>
            <form onSubmit={handleSearch}>
              <div className="bg-[#003A9B] p-6 rounded-lg w-[1000px] grid grid-cols-6 gap-2">
                <input
                  type="text"
                  placeholder="Search Doctors..."
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                  className='border-2 border-black col-span-3 rounded-lg px-4 py-2 text-[18px] text-[#2D2D2D] font-[600]'
                />
                <select
                  name=""
                  id=""
                  onChange={(e) => setCategory(e.target.value)}
                  className='col-span-2 text-[16px] text-[#2D2D2D] font-[500] py-[2px] pl-2 rounded-lg h-[44px]'
                >
                  <option value="">Select Category</option>
                  {options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <button type="submit" className='col-span-1 bg-[#b8dbb8] hover:bg-[#43a047] hover:text-white text-[#3d3d3d] text-[20px] rounded-lg px-4 h-[44px]'>
                  Search
                </button>
              </div>
            </form>
            {isDropdownVisible && searchTerm && filteredDoctors.length > 0 && (
              <ul className="bg-white border-2 border-gray-300 rounded-lg w-[1000px] max-h-[200px] overflow-y-auto mt-[52.3px] absolute top-[130px] left-0 z-10 cursor-pointer">
                {filteredDoctors.map((doctor, index) => (
                  <li
                    onClick={() => { 
                      setSearchTerm(doctor.name); 
                      setIsDropdownVisible(false); // Hide dropdown when a name is clicked
                    }}
                    key={index}
                    className="p-2 text-[#2D2D2D] text-[18px] font-[600] hover:bg-gray-100"
                  >
                    {doctor.name}
                  </li>
                ))}
              </ul>
            )}
            {isDropdownVisible && searchTerm && filteredDoctors.length === 0 && (
              <p className="text-[#2D2D2D] text-[18px] font-[600] mt-2">No doctors found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
