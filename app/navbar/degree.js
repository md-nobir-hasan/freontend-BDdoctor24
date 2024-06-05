"use client";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Products from "../component/doctorsData";
import IndexPage from "../component/doctor";

export default function Degree() {
  const [show, setShow] = useState(true);
  const [selectedDegrees, setSelectedDegrees] = useState([]);

  const handleCheckboxChange = (degree) => {
    setSelectedDegrees((prevSelectedDegrees) =>
      prevSelectedDegrees.includes(degree)
        ? prevSelectedDegrees.filter((d) => d !== degree)
        : [...prevSelectedDegrees, degree]
    );
  };
  
  const filteredProducts = selectedDegrees.length
    ? Products.filter((Product) =>
        selectedDegrees.some((degree) => Product.degrees.includes(degree))
      )
    : Products;

  function handleShowClick() {
    setShow(!show);
  }
  return (
    <div className="flex flex-col p-4 shadow-lg rounded-lg bg-white">
      <div className="flex justify-between">
        <div className="mb-2">
          <p className="text-xl font-semibold">Degree</p>
        </div>
        <div>
          <button onClick={handleShowClick}>
            {show ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
          </button>
        </div>
      </div>
      {show && (
        <div className="flex flex-col">
          <label
            htmlFor="check-md"
            className="text-xl font-semibold mb-2 flex gap-2"
          >
            <input
              id="check-md"
              type="checkbox"
              value="Md"
              onChange={() => handleCheckboxChange("MD")}
              className="w-4"
            />
            Md
          </label>
          <label
            htmlFor="check-ms"
            className="text-xl font-semibold mb-2 flex gap-2"
          >
            <input
              id="check-ms"
              type="checkbox"
              value="FCPS"
              onChange={() => handleCheckboxChange("FCPS")}
              className="w-4"
            />
            MS
          </label>
          <label
            htmlFor="check-fcps"
            className="text-xl font-semibold mb-2 flex gap-2"
          >
            <input id="check-fcps" type="checkbox" className="w-4" />
            FCPS
          </label>
          <label
            htmlFor="check-m.phil"
            className="text-xl font-semibold mb-2 flex gap-2"
          >
            <input
              id="check-m.phil"
              type="checkbox"
              value="M.Phil"
              onChange={() => handleCheckboxChange("M.Phil")}
              className="w-4"
            />
            M.Phil
          </label>
          <label
            htmlFor="check-diploma"
            className="text-xl font-semibold mb-2 flex gap-2"
          >
            <input
              id="check-diploma"
              type="checkbox"
              value="Diploma"
              onChange={() => handleCheckboxChange("Diploma")}
              className="w-4"
            />
            Diploma
          </label>
        </div>
      )}

      <div>
        <IndexPage products={filteredProducts}/>
      </div>
    </div>
  );
}
