"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import {
  FaHeart,
  FaGraduationCap,
  FaStar,
  FaHospital,
  FaCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";
import AllSpecialty from "../component/menu";
import ExperienceRange from "./experienceRang";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineUp,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import ImageGallery from "./ImageGallery";
import Logo from "./logo";

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
  const [selectedHospitals, setSelectedHospitals] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedTime, setSelectedTime] = useState("morning");
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
      console.log(name, category, "i am localstorage");
      if (name && category) {
        try {
          console.log(name, category);
          const response = await fetch(
            `https://admin.treatmentopportunity.com/api/doctors/search?name=${name}&category=${category}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();

          console.log("Doctores", data.data);
          setDoctors(data.data);
        } catch (error) {
          console.error("Error fetching options:", error);
        }
      }
    };

    fetchDoctors();

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleCheckboxChange = (type, value) => {
    const updateState = (prevState, value) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value];

    switch (type) {
      case "degree":
        setSelectedDegrees((prev) => updateState(prev, value));
        break;
      case "designation":
        setSelectedDesignations((prev) => updateState(prev, value));
        break;
      case "specialty":
        setSelectedSpecialties((prev) => updateState(prev, value));
        break;
      case "hospital":
        setSelectedHospitals((prev) => updateState(prev, value));
        break;
      case "location":
        setSelectedLocation((prev) => updateState(prev, value));
        break;
      default:
        break;
    }
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const filterByDegree =
      selectedDegrees.length === 0 ||
      selectedDegrees.some((degree) => doctor.qualifications.includes(degree));
    const filterByDesignation =
      selectedDesignations.length === 0 ||
      selectedDesignations.includes(doctor.designation);
    const filterBySpecialty =
      selectedSpecialties.length === 0 ||
      selectedSpecialties.includes(doctor.specialty);
    const filterByHospital =
      selectedHospitals.length === 0 ||
      selectedHospitals.includes(doctor.hospital);
    const filterByLocation =
      selectedLocation.length === 0 ||
      selectedLocation.includes(doctor.location);
    const filterByExperience =
      doctor.experience >= experienceRange[0] &&
      doctor.experience <= experienceRange[1];
    const filterByName =
      searchQuery === "" ||
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      filterByDegree &&
      filterByDesignation &&
      filterBySpecialty &&
      filterByHospital &&
      filterByLocation &&
      filterByExperience &&
      filterByName
    );
  });

  

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
    <div className="doctors grid grid-cols-5 max-md:grid-cols-1 max-xl:grid-cols-7 max-sm:gap-2 max-lg:gap-4 px-[100px] max-2xl:px-[60px] max-xl:px-[40px] max-sm:px-[10px] max-md:px-[20px] max-lg:px-[25px]">
      <div className="max-xl:col-span-2 max-md:mt-[10px]">
        <button
          onClick={handleMenuClick}
          className="hidden text-2xl max-md:block max-sm:absolute max-sm:right-2 max-sm:mt-[10px]"
        >
          {showSidebar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <aside
          ref={sidebarRef}
          className={`transition-transform duration-300 transform md:transform-none ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } absolute inset-y-0 max-sm:top-[10px] max-md:top-[40px] max-md:left-0 lg:w-64 bg-white shadow-lg md:relative sm::translate-x-0 max-xl:col-span-2`}
        >
          <div>
            <div className="flex items-center justify-between p-4 my-4 bg-white rounded-lg shadow-lg max-sm:my-2">
              <p className="text-xl max-lg:text-[16px]">
                Filter:{" "}
                {selectedDegrees.length +
                  selectedDesignations.length +
                  selectedSpecialties.length +
                  selectedHospitals.length +
                  selectedLocation.length}
              </p>
              <button
                className="px-4 max-lg:px-2 max-lg:py-[2px] text-xl max-lg:text-[16px] bg-slate-200 max-xl:px-2"
                onClick={() => {
                  setSelectedDegrees([]);
                  setSelectedDesignations([]);
                  setSelectedSpecialties([]);
                  setSelectedHospitals([]);
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
                  type="search"
                  placeholder="Search Doctors"
                  className="w-full placeholder:text-green-900 placeholder:text-[14px] pl-4 py-2 rounded-full bg-white border-2 border-green-900 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute px-4 -translate-y-1/2 bg-white rounded-full right-2 top-1/2">
                  <AiOutlineSearch size={22} color="green" />
                </button>
              </form>
            </div>
            <div className="my-4 rounded-lg shadow-lg">
              <ExperienceRange
                experience={experienceRange}
                setExperience={setExperienceRange}
              />
            </div>
            {/* Degree Section */}
            <div className="my-4">
              <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
                <div className="flex justify-between">
                  <div className="mb-2">
                    <p className="max-lg:text-[16px] text-xl font-semibold">
                      Degree
                    </p>
                  </div>
                  <div>
                    <button onClick={() => setShowDegree(!showDegree)}>
                      {showDegree ? (
                        <AiOutlineDown size={18} />
                      ) : (
                        <AiOutlineUp size={18} />
                      )}
                    </button>
                  </div>
                </div>
                {showDegree && (
                  <div className="flex flex-col">
                    {["MD", "MS", "FCPS", "M.Phil", "Diploma"].map((degree) => (
                      <label
                        key={degree}
                        htmlFor={`check-degree-${degree}`}
                        className="flex gap-2 mb-2 max-lg:text-[16px] text-xl font-semibold"
                      >
                        <input
                          id={`check-degree-${degree}`}
                          type="checkbox"
                          value={degree}
                          onChange={() =>
                            handleCheckboxChange("degree", degree)
                          }
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
                    <p className="text-xl max-lg:text-[16px] font-semibold">
                      Designation
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setShowDesignation(!showDesignation)}
                    >
                      {showDesignation ? (
                        <AiOutlineDown size={18} />
                      ) : (
                        <AiOutlineUp size={18} />
                      )}
                    </button>
                  </div>
                </div>
                {showDesignation && (
                  <div className="flex flex-col">
                    {[
                      "Ex.Professor",
                      "Professor",
                      "Assistant Professor",
                      "Sr.Consultant",
                      "Consultant",
                      "Jr.Consultant",
                    ].map((designation) => (
                      <label
                        key={designation}
                        htmlFor={`check-designation-${designation}`}
                        className="flex gap-2 mb-2 text-xl max-lg:text-[16px] font-semibold"
                      >
                        <input
                          id={`check-designation-${designation}`}
                          type="checkbox"
                          value={designation}
                          onChange={() =>
                            handleCheckboxChange("designation", designation)
                          }
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
                    <p className="text-xl max-lg:text-[16px] font-semibold">
                      Specialty wise
                    </p>
                  </div>
                  <div>
                    <button onClick={() => setShowSpecialty(!showSpecialty)}>
                      {showSpecialty ? (
                        <AiOutlineDown size={18} />
                      ) : (
                        <AiOutlineUp size={18} />
                      )}
                    </button>
                  </div>
                </div>
                {showSpecialty && (
                  <div className="flex flex-col">
                    {[
                      "Anesthesiology",
                      "Cardiac Surgeon",
                      "Cardiologist",
                      "Colorectal Surgeon",
                      "Dental",
                      "Dermatologist",
                      "Endocrinologist",
                      "ENT",
                      "Eye",
                      "Family Medicine",
                    ].map((specialty) => (
                      <label
                        key={specialty}
                        htmlFor={`check-specialty-${specialty}`}
                        className="flex gap-2 mb-2 text-xl max-lg:text-[16px] font-semibold"
                      >
                        <input
                          id={`check-specialty-${specialty}`}
                          type="checkbox"
                          value={specialty}
                          onChange={() =>
                            handleCheckboxChange("specialty", specialty)
                          }
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
                    <p className="text-xl max-lg:text-[16px] font-semibold">
                      Hospital wise
                    </p>
                  </div>
                  <div>
                    <button onClick={() => setShowHospital(!showHospital)}>
                      {showHospital ? (
                        <AiOutlineDown size={18} />
                      ) : (
                        <AiOutlineUp size={18} />
                      )}
                    </button>
                  </div>
                </div>
                {showHospital && (
                  <div className="flex flex-col">
                    {[
                      "Labaid Hospital",
                      "Square Hospital",
                      "Ibn Sina Hospital",
                      "Central Hospital",
                      "Green Life Hospital",
                      "Popular Diagnostics",
                      "Aich Medical Collage",
                      "AI Manar Hospital",
                    ].map((hospital) => (
                      <label
                        key={hospital}
                        htmlFor={`check-hospital-${hospital}`}
                        className="flex gap-2 mb-2 max-lg:text-[16px] text-xl font-semibold"
                      >
                        <input
                          id={`check-hospital-${hospital}`}
                          type="checkbox"
                          value={hospital}
                          onChange={() =>
                            handleCheckboxChange("hospital", hospital)
                          }
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
                    <p className="text-xl max-lg:text-[16px] font-semibold">
                      Practicing day
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setShowPactecingDay(!showPactecingDay)}
                    >
                      {showPactecingDay ? (
                        <AiOutlineDown size={18} />
                      ) : (
                        <AiOutlineUp size={18} />
                      )}
                    </button>
                  </div>
                </div>
                {showPactecingDay && (
                  <div>
                    <div className="grid grid-cols-2 gap-2 max-lg:text-[16px] text-xl">
                      {days.map((day, index) => (
                        <div key={index}>
                          <label
                            htmlFor={`check-${day.id}`}
                            className="flex gap-2 mb-2 max-lg:text-[16px] text-xl font-semibold"
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
                            selectedTime === "morning"
                              ? "bg-blue-900"
                              : "bg-zinc-300"
                          }`}
                        ></button>
                        <button
                          onClick={() => setSelectedTime("evening")}
                          className={`transition duration-700 ease-in-out h-full w-20 rounded-xl ${
                            selectedTime === "evening"
                              ? "bg-blue-900"
                              : "bg-zinc-300"
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
                    <p className="text-xl max-lg:text-[16px] font-semibold">
                      Location
                    </p>
                  </div>
                  <div>
                    <button onClick={() => setShowLocation(!showLocation)}>
                      {showLocation ? (
                        <AiOutlineDown size={18} />
                      ) : (
                        <AiOutlineUp size={18} />
                      )}
                    </button>
                  </div>
                </div>
                {showLocation && (
                  <div className="flex flex-col max-lg:text-[16px] text-xl">
                    {[
                      "Dhaka",
                      "Chattogram",
                      "Barishal",
                      "Sylhet",
                      "Khulna",
                      "Rajshahi",
                      "Rangpuri",
                      "Mymensingh",
                    ].map((location) => (
                      <label
                        key={location}
                        htmlFor={`check-location-${location}`}
                        className="flex gap-2 mb-2 text-xl max-lg:text-[16px] font-semibold"
                      >
                        <input
                          id={`check-location-${location}`}
                          type="checkbox"
                          value={location}
                          onChange={() =>
                            handleCheckboxChange("location", location)
                          }
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
      <div className="col-span-4 max-xl:col-span-5">
        <div className="max-sm:mt-8 max-md:mt-4 mt-4 mb-4">
          <AllSpecialty />
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-5 max-xl:col-span-6">
            <div>
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex flex-col lg:flex-row items-center max-lg:gap-4 gap-2 p-4 my-4 bg-white border rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row items-center max-lg:gap-4 gap-2 w-full">
                    <div className="flex-shrink-0">
                      <ImageGallery />
                    </div>
                    <div className="flex-grow">
                      <div className="inline-flex items-center bg-gray-100 px-[4px] rounded-lg mb-4">
                        <FaHeart className="mr-2 text-gray-600" />
                        <p className="text-[20px] font-semibold text-gray-600">
                          {doctor.categories.title}
                        </p>
                      </div>
                      <Link href="/doctors-details">
                        <h3 className="text-[24px] text-blue-600 font-semibold mb-2">
                          {doctor.name}
                        </h3>
                      </Link>
                      <div className="flex items-center text-gray-600 mb-2">
                        <FaGraduationCap className="mr-2" />
                        <p className="text-[16px]">{doctor.qualifications}</p>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <FaStar className="mr-2" />
                        <p className="text-[16px]">
                          {doctor.experience}+ Years of Experience
                        </p>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <FaHospital className="mr-2" />
                        <p className="text-[16px]">{doctor.chamber.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full lg:flex-col lg:w-auto">
                    <div className="lg:mb-4 flex items-start">
                      <Logo />
                    </div>
                    <div>
                      <button className="w-[12rem] h-[40px] flex items-center justify-center gap-2 px-2 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <FaCalendarAlt className="mr-2" />
                        <span>Book Appointment</span>
                      </button>
                    </div>
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
