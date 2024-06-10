"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AllSpecialty from "../component/menu";
import ExperienceRange from "./experienceRang";
import { AiOutlineDown, AiOutlineSearch, AiOutlineUp,AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function AllDoctors() {
  const [showDegree, setShowDegree] = useState(true);
  const [showDesignation, setShowDesignation] = useState(true);
  const [showSpecialty, setShowSpecialty] = useState(true);
  const [showHospital, setShowHospital] = useState(true);
  const [showPactecingDay, setShowPactecingDay] = useState(true);
  const [showLocation, setShowLocation] = useState(true);
  const [selectedDegrees, setSelectedDegrees] = useState([]);
  const [selectedDesignations, setSelectedDesignations] = useState([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedTime, setSelectedTime] = useState('morning');
  const [searchQuery, setSearchQuery] = useState("");
  const [experienceRange, setExperienceRange] = useState([0, 55]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const sidebarRef = useRef(null);
  
  const handleMenuClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      const name = localStorage.getItem("name");
      const category = localStorage.getItem("category");
      // console.log(name, category,'i am localstorage');
      if (name && category) {
        try {
          console.log(name,category )
          const response = await fetch(
            `http://admin.treatmentopportunity.com/api/doctors/search?name=${name}&category=${category}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }

          const data = await response.json();
          console.log("Doctors:", data);
          setDoctors(
            data.data.map((item) => ({ label: item.title, value: item.title }))
          );
        } catch (error) {
          console.error("Error fetching options:", error);
        }
      }
    }

    fetchDoctors();
   
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },);

  const handleCheckboxChange = (type, value) => {
    switch (type) {
      case "degree":
        setSelectedDegrees((prev) =>
          prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value]
        );
        break;
      case "designation":
        setSelectedDesignations((prev) =>
          prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value]
        );
        break;
      case "specialty":
        setSelectedSpecialties((prev) =>
          prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
        );
        break;
      case "hospital":
        setSelectedHospital((prev) =>
            prev.includes(value) ? prev.filter((h) => h !== value) : [...prev, value]
          );
        break;
        case "location":
            setSelectedLocation((prev) =>
              prev.includes(value) ? prev.filter((l) => l !== value) : [...prev, value]
            );
        break;
      default:
        break;
    }
  };

  // const filteredProducts = products.filter((product) => {
  //   const degreeMatch = selectedDegrees.length
  //     ? selectedDegrees.some((degree) => product.degrees.includes(degree))
  //     : true;
  //   const designationMatch = selectedDesignations.length
  //     ? selectedDesignations.includes(product.designation)
  //     : true;
  //   const specialtyMatch = selectedSpecialties.length
  //     ? selectedSpecialties.includes(product.specialty)
  //     : true;
  //   const hospitalMatch = selectedHospital.length
  //     ? selectedHospital.includes(product.hospital)
  //     : true;
  //     const locationMatch = selectedLocation.length
  //     ? selectedLocation.includes(product.location)
  //     : true;
  //     const experienceMatch =
  //     product.experience >= experienceRange[0] && product.experience <= experienceRange[1];

  //     const searchMatch = (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
  //     (product.specialty && product.specialty.toLowerCase().includes(searchQuery.toLowerCase())) ||
  //     (product.hospital && product.hospital.toLowerCase().includes(searchQuery.toLowerCase())) ||
  //     (product.location && product.location.toLowerCase().includes(searchQuery.toLowerCase()));

  //     return (
  //       degreeMatch &&
  //       designationMatch &&
  //       specialtyMatch &&
  //       hospitalMatch &&
  //       locationMatch &&
  //       experienceMatch &&
  //       searchMatch
  //     );
  // });

  const days = [
    { id: "sat", label: "Sat" },
    { id: "sun", label: "Sun" },
    { id: "mon", label: "Mon" },
    { id: "tue", label: "Tue" },
    { id: "wed", label: "Wed" },
    { id: "thu", label: "Thu" },
    { id: "fri", label: "Fri" },
  ];

  return (
    <div className="doctors grid grid-cols-5 max-xl:grid-cols-7 gap-6 max-sm:gap-2 max-lg:gap-4 pr-[140px] pl-[100px]">
      
      <div className="max-xl:col-span-2">
      <button onClick={handleMenuClick} className="hidden text-2xl max-md:block max-sm:absolute max-sm:right-2 max-sm:top-2">
          {showSidebar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      <aside 
      ref={sidebarRef}
      className={`transition-transform duration-300 transform md:transform-none ${showSidebar ? 'translate-x-0' : '-translate-x-full'} absolute inset-y-0 max-md:top-[10px] left-0 w-64 bg-white shadow-lg md:relative md:translate-x-0`}>
        <div>
        <div className="flex items-center justify-between p-4 my-4 bg-white rounded-lg shadow-lg max-sm:my-2">
             <p className="text-xl">
               Filter: {selectedDegrees.length + selectedDesignations.length + selectedSpecialties.length + selectedHospital.length + selectedLocation.length}
             </p>
             <button
               className="px-4 py-1 text-xl bg-slate-200 max-xl:px-2"
               onClick={() => {
                 setSelectedDegrees([]);
                 setSelectedDesignations([]);
                 setSelectedSpecialties([]);
                 setSelectedHospital([]);
                 setSelectedLocation([]);
                 setExperienceRange([0, 55]);
                 setSearchQuery("");
               }}
             >
               Clear
             </button>
           </div>
           <div className="p-4 my-4 bg-white rounded-lg shadow-lg max-sm:my-2">
           <form className="relative w-full">
               <input
                 type='search'
                 placeholder='Search Doctors'
                 className='w-full placeholder:text-green-900 placeholder:text-[16px] pl-4 py-2 rounded-full bg-white border-2 border-green-900 focus:outline-none'
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
               <button className='absolute px-4 -translate-y-1/2 bg-white rounded-full right-2 top-1/2'>
                 <AiOutlineSearch size={22} color='green' />
               </button>
             </form>
           </div>
           <div className="my-4 rounded-lg shadow-lg">
             <ExperienceRange experience={experienceRange} setExperience={setExperienceRange} />
           </div>
           {/* Degree Section */}
           <div className="my-4">
             <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
               <div className="flex justify-between">
                 <div className="mb-2">
                   <p className="text-xl font-semibold">Degree</p>
                 </div>
                 <div>
                   <button onClick={() => setShowDegree(!showDegree)}>
                     {showDegree ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
                   </button>
                 </div>
               </div>
               {showDegree && (
                 <div className="flex flex-col">
                   {["MD", "MS", "FCPS", "M.Phil", "Diploma"].map((degree) => (
                     <label
                       key={degree}
                       htmlFor={`check-degree-${degree}`}
                       className="flex gap-2 mb-2 text-xl font-semibold"
                     >
                       <input
                         id={`check-degree-${degree}`}
                         type="checkbox"
                         value={degree}
                         onChange={() => handleCheckboxChange("degree", degree)}
                         className="w-4"
                       />
                       {degree}
                     </label>
                   ))}
                 </div>
               )}
             </div>
           </div>
           {/* Designation Section */}
           <div className="my-4">
             <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
               <div className="flex justify-between">
                 <div className="mb-2">
                   <p className="text-xl font-semibold">Designation</p>
                 </div>
                 <div>
                   <button onClick={() => setShowDesignation(!showDesignation)}>
                     {showDesignation ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
                   </button>
                 </div>
               </div>
               {showDesignation && (
                 <div className="flex flex-col">
                   {["Ex.Professor", "Professor", "Assistant Professor", "Sr.Consultant", "Consultant", "Jr.Consultant"].map((designation) => (
                     <label
                       key={designation}
                       htmlFor={`check-designation-${designation}`}
                       className="flex gap-2 mb-2 text-xl font-semibold"
                     >
                       <input
                         id={`check-designation-${designation}`}
                         type="checkbox"
                         value={designation}
                         onChange={() => handleCheckboxChange("designation", designation)}
                         className="w-4"
                       />
                       {designation}
                     </label>
                   ))}
                 </div>
               )}
             </div>
           </div>
           {/* Specialty Section */}
           <div className="my-4">
             <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
               <div className="flex justify-between">
                 <div className="mb-2">
                   <p className="text-xl font-semibold">Specialty wise</p>
                 </div>
                 <div>
                   <button onClick={() => setShowSpecialty(!showSpecialty)}>
                     {showSpecialty ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
                   </button>
                 </div>
               </div>
               {showSpecialty && (
                 <div className="flex flex-col">
                   {["Anesthesiology", "Cardiac Surgeon", "Cardiologist", "Colorectal Surgeon", "Dental", "Dermatologist", "Endocrinologist", "ENT", "Eye", "Family Medicine"].map((specialty) => (
                     <label
                       key={specialty}
                       htmlFor={`check-specialty-${specialty}`}
                       className="flex gap-2 mb-2 text-xl font-semibold"
                     >
                       <input
                         id={`check-specialty-${specialty}`}
                         type="checkbox"
                         value={specialty}
                         onChange={() => handleCheckboxChange("specialty", specialty)}
                         className="w-4"
                       />
                       {specialty}
                     </label>
                   ))}
                 </div>
               )}
             </div>
           </div>
           {/* ----hospital-section---- */}
           <div className="my-4">
             <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
               <div className="flex justify-between">
                 <div className="mb-2">
                   <p className="text-xl font-semibold">Hospital wise</p>
                 </div>
                 <div>
                   <button onClick={() => setShowHospital(!showHospital)}>
                     {showHospital ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
                   </button>
                 </div>
               </div>
               {showHospital && (
                 <div className="flex flex-col">
                   {["Labaid Hospital", "Square Hospital", "Ibn Sina Hospital", "Central Hospital", "Green Life Hospital", "Popular Diagnostics","Aich Medical Collage","AI Manar Hospital"].map((hospital) => (
                     <label
                       key={hospital}
                       htmlFor={`check-hospital-${hospital}`}
                       className="flex gap-2 mb-2 text-xl font-semibold"
                     >
                       <input
                         id={`check-hospital-${hospital}`}
                         type="checkbox"
                         value={hospital}
                         onChange={() => handleCheckboxChange("hospital", hospital)}
                         className="w-4"
                       />
                       {hospital}
                     </label>
                   ))}
                 </div>
               )}
             </div>
           </div>
           {/* ---hospital-section-end--- */}
           {/* ----pactecinDay--start--- */}
           <div className="my-4">
             <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
               <div className="flex justify-between">
                 <div className="mb-2">
                   <p className="text-xl font-semibold">Practicing day</p>
                 </div>
                 <div>
                   <button onClick={() => setShowPactecingDay(!showPactecingDay)}>
                     {showPactecingDay ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
                   </button>
                 </div>
               </div>
               {showPactecingDay && (
                 <div>
                   <div className="grid grid-cols-2 gap-2">
                     {days.map((day, index) => (
                       <div key={index}>
                         <label
                           htmlFor={`check-${day.id}`}
                           className="flex gap-2 mb-2 text-xl font-semibold"
                         >
                           <input
                             id={`check-${day.id}`}
                             type="checkbox"
                             className="w-4"
                           />
                           {day.label}
                         </label>
                       </div>
                     ))}
                   </div>
                   <div className="px-8 py-4">
                     <div className="flex justify-between">
                       <p>Morning</p>
                       <p>Evening</p>
                     </div>
                     <div className="flex items-center justify-between w-full h-4 mt-2 rounded-lg bg-zinc-300">
                       <button
                         onClick={() => setSelectedTime("morning")}
                         className={`transition duration-700 ease-in-out h-full w-20 rounded-xl ${
                           selectedTime === "morning" ? "bg-blue-900" : "bg-zinc-300"
                         }`}
                       ></button>
                       <button
                         onClick={() => setSelectedTime("evening")}
                         className={`transition duration-700 ease-in-out h-full w-20 rounded-xl ${
                           selectedTime === "evening" ? "bg-blue-900" : "bg-zinc-300"
                         }`}
                       ></button>
                     </div>
                   </div>
                 </div>
               )}
             </div>
           </div>
           {/* ----pactecinDay--end--- */}
           <div className="my-4">
             <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
               <div className="flex justify-between">
                 <div className="mb-2">
                   <p className="text-xl font-semibold">Location</p>
                 </div>
                 <div>
                   <button onClick={() => setShowLocation(!showLocation)}>
                     {showLocation ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
                   </button>
                 </div>
               </div>
               {showLocation && (
                 <div className="flex flex-col">
                   {["Dhaka", "Chattogram", "Barishal", "Sylhet", "Khulna", "Rajshahi","Rangpuri","Mymensingh"].map((location) => (
                     <label
                       key={location}
                       htmlFor={`check-location-${location}`}
                       className="flex gap-2 mb-2 text-xl font-semibold"
                     >
                       <input
                         id={`check-location-${location}`}
                         type="checkbox"
                         value={location}
                         onChange={() => handleCheckboxChange("location", location)}
                         className="w-4"
                       />
                       {location}
                     </label>
                   ))}
                 </div>
               )}
             </div>
           </div>
        </div>
        {/* ----location--section--end */}
      </aside>
      </div>
      <div className="col-span-4 max-xl:col-span-5 max-md:col-span-7">
        <div className="my-4">
          <AllSpecialty />
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-3 max-sm:col-span-4">
            <div>
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex justify-between p-4 my-4 bg-white border rounded-lg shadow-lg max-sm:flex-col sm:items-center max-sm:p-2"
                >
                  <div>
                    <p className="text-xl font-semibold text-gray-600 max-sm:text-md sm:my-2">
                      {doctor.specialty}
                    </p>
                    <Link href="/doctors-details">
                      <h3 className="text-xl max-sm:text-[16px] max-sm:font-[600] font-semibold">{doctor.name}</h3>
                    </Link>
                    <p className="text-gray-600 max-sm:text-[16px] max-sm:font-[500]">{doctor.degrees.join(", ")}</p>
                    <p className="text-gray-600 max-sm:text-[16px] max-sm:font-[500]">{doctor.experience}+ Years of Experience</p>
                    <p className="text-gray-600 max-sm:text-[16px] max-sm:font-[500]">{doctor.hospital}</p>
                    <p className="text-gray-600 max-sm:text-[16px] max-sm:font-[500]">{doctor.location}</p>
                  </div>
                  <div className="flex justify-between sm:flex-col sm:gap-16 sm:items-end max-sm:my-4">
                    <Image
                      src={doctor.logo}
                      alt="doctor logo"
                      className="max-sm:h[90px] max-sm:w-[80px]"
                      width={150}
                      height={150}
                    />
                    <button className="max-sm:mt-[2px] mt-2 px-2 py-2 text-green-600 rounded-lg bg-slate-300">
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 text-center"></div>
        </div>
      </div>
    </div>
  );
}
