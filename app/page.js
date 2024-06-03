import Link from "next/link";
import SearchBarHome from "./component/searchBar";
import Image from "next/image";
import { FiActivity } from "react-icons/fi";

export default function Home() {
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
              <li className="text-[#2D2D2D] text-[20px] font-[600] px-6 py-2 hover:text-[#164081] hover:bg-cyan-100">
                Find Doctors
              </li>
              <li className="text-[#2D2D2D] text-[20px] font-[600] px-6 py-2 hover:text-[#164081] hover:bg-cyan-100">
                About us
              </li>
              <li className="text-[#2D2D2D] text-[20px] font-[600] px-6 py-2 hover:text-[#164081] hover:bg-cyan-100">
                For Doctors
              </li>
              <li className="text-[#2D2D2D] text-[20px] font-[600] px-6 py-2 hover:text-[#164081] hover:bg-cyan-100">
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
          <SearchBarHome />
        </div>
      </div>
    </div>
  );
}
