"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiActivity } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [category, setCategory] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    localStorage.setItem("name", e.target.value);
    setIsDropdownVisible(true);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    localStorage.setItem("category", e.target.value);
  };

  const fetchOptions = async () => {
    try {
      const response = await fetch(
        "https://admin.treatmentopportunity.com/api/categories"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();
      setOptions(
        data.data.map((item) => ({ label: item.title, value: item.title }))
      );
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await fetch(
        "https://admin.treatmentopportunity.com/api/doctors"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch doctors");
      }

      const data = await response.json();
      setDoctors(data.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchOptions();
    fetchDoctors();
  }, []);

  useEffect(() => {
    setFilteredDoctors(
      doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, doctors]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="bg-white">
        <nav className="flex items-center justify-between relative px-4 py-4 md:px-6 xl:px-12 shadow-lg">
          <div>
            <Link href="/dashboard">
              <h1 className="text-[#003A9B] text-[20px] max-sm:text-[18px] md:text-[20px] xl:text-[20px] font-[700] border-b-[1px] border-black">
                bdDoctors24.com
              </h1>
            </Link>
            <p className="text-[#2D2D2D] text-[12px] max-sm:text-[10px] md:text-[14px] xl:text-[16px] font-[500]">
              ALL SPECIALTY DOCTORS IN BANGLADESH
            </p>
          </div>

          <div className="max-sm:absolute top-[18px] right-0">
            <div
              className="sm:hidden mt-[10px] px-4 flex items-end justify-end"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </div>

            <div
              className={`sm:block max-sm:bg-zinc-400 max-sm:shadow-xl max-sm:mt-[22px] max-sm:px-4 transition-all duration-300 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex max-sm:flex-col">
                <li className="text-[#2D2D2D] text-[14px] md:text-[16px] xl:text-[20px] font-[600] px-2 md:px-4 xl:px-6 py-2 sm:hover:text-[#164081] sm:hover:bg-cyan-100 cursor-pointer">
                  Find Doctors
                </li>
                <li className="text-[#2D2D2D] text-[14px] md:text-[16px] xl:text-[20px] font-[600] px-2 md:px-4 xl:px-6 py-2 sm:hover:text-[#164081] sm:hover:bg-cyan-100 cursor-pointer">
                  About us
                </li>
                <li className="text-[#2D2D2D] text-[14px] md:text-[16px] xl:text-[20px] font-[600] px-2 md:px-4 xl:px-6 py-2 sm:hover:text-[#164081] sm:hover:bg-cyan-100 cursor-pointer">
                  For Doctors
                </li>
                <li className="text-[#2D2D2D] text-[14px] md:text-[16px] xl:text-[20px] font-[600] px-2 md:px-4 xl:px-6 py-2 sm:hover:text-[#164081] sm:hover:bg-cyan-100 cursor-pointer">
                  Contact us
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="background-img max-sm:h-[500px] max-md:h-[580px] max-xl:h-[600px] h-[650px]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center mt-10 w-[90%] md:w-[700px] text-center">
            <span className="text-[#fff] text-[20px] md:text-[34px] font-[700]">
              Find doctors and specialties and book your
            </span>
            <span className="text-[#fff] text-[20px] md:text-[34px] font-[700]">
              appointment now
            </span>
            <p className="text-[#fff] text-[14px] md:text-[20px] font-[600] mt-4">
              Experts from all Bangladesh medical fields in one place
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-[50vh] max-sm:mt-[100px] max-md:mt-[40px] max-xl:mt-[50px]">
          <div className="relative flex flex-col gap-4 w-[90%] md:w-auto">
            <div className="flex items-center gap-4 max-sm:gap-2">
              <div className="bg-white p-2 rounded-full border-2 border-blue-900">
                <div className="bg-blue-900 p-4 max-sm:p-[10px] rounded-full">
                  <FiActivity color="white" size={20} />
                </div>
              </div>
              <div>
                <p className="text-[16px] md:text-[20px] text-[#fff] font-[700]">
                  Live Doctors
                </p>
                <span className="text-[16px] md:text-[20px] text-[#fff] font-[700]">
                  500
                </span>
              </div>
            </div>
            <div className="bg-[#003A9B] p-6 rounded-lg w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2">
           <div>
           <input
                type="text"
                placeholder="Search Doctors..."
                value={searchTerm}
                onChange={handleSearchTermChange}
                className="border-2 relative border-black col-span-1 sm:col-span-2 md:col-span-3 rounded-lg px-4 py-2 text-[14px] sm:text-[16px] md:text-[18px] text-[#2D2D2D] font-[600]"
              />
               {isDropdownVisible && searchTerm && (
              <div className="">
                <ul className="bg-white border-2 border-gray-300 rounded-lg max-h-[200px] mt-2 absolute top-0 right-00 z-10 cursor-pointer">
                  {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                      <li
                        onClick={() => {
                          setSearchTerm(doctor.name);
                          localStorage.setItem("name", doctor.name);
                          setIsDropdownVisible(false);
                        }}
                        key={index}
                        className="p-2 text-[#2D2D2D] text-[14px] md:text-[18px] hover:bg-gray-200"
                      >
                        {doctor.name}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-[#2D2D2D] text-[14px] md:text-[18px]">
                      No doctors found
                    </li>
                  )}
                </ul>
              </div>
            )}
           </div>
              <select
                onChange={handleCategoryChange}
                className="col-span-1 sm:col-span-1 md:col-span-2 text-[14px] sm:text-[14px] md:text-[16px] text-[#2D2D2D] font-[500] py-[2px] pl-2 rounded-lg h-[44px]"
              >
                <option value="">Select Category</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Link
                className="col-span-1 sm:col-span-1 md:col-span-1 bg-[#b8dbb8] hover:bg-[#43a047] hover:text-white text-[#3d3d3d] text-[14px] sm:text-[16px] md:text-[20px] rounded-lg px-4 h-[44px] flex items-center justify-center"
                href="/dashboard"
              >
                Search
              </Link>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
