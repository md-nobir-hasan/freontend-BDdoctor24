import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Dr. Lutfor Rahman",
    title: "Cardiac Surgeon",
    degrees: ["MS", "MD"],
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    img: "https://path/to/logo1.png", // Replace with your image path
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    title: "Neurosurgeon",
    degrees: ["FCPS", "MD"],
    experience: "15+ Years of Experience",
    hospital: "Apollo Hospital",
    img: "https://path/to/logo2.png", // Replace with your image path
  },
  // Add more products as needed
];

export default function FilterableProductList() {
  const [selectedDegrees, setSelectedDegrees] = useState([]);

  const handleCheckboxChange = (degree) => {
    setSelectedDegrees((prevSelectedDegrees) =>
      prevSelectedDegrees.includes(degree)
        ? prevSelectedDegrees.filter((d) => d !== degree)
        : [...prevSelectedDegrees, degree]
    );
  };

  const filteredProducts = selectedDegrees.length
    ? products.filter((product) =>
        selectedDegrees.some((degree) => product.degrees.includes(degree))
      )
    : products;

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <div className="mb-4">
          <p className="text-xl font-semibold">Degree</p>
          <label>
            <input
              type="checkbox"
              value="Md"
              onChange={() => handleCheckboxChange("MD")}
            />
            Md
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="MS"
              onChange={() => handleCheckboxChange("MS")}
            />
            MS
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="FCPS"
              onChange={() => handleCheckboxChange("FCPS")}
            />
            FCPS
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="M.Phil"
              onChange={() => handleCheckboxChange("M.Phil")}
            />
            M.Phil
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Diploma"
              onChange={() => handleCheckboxChange("Diploma")}
            />
            Diploma
          </label>
        </div>
      </div>
      <div className="w-3/4 p-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 mb-4 shadow-lg rounded-lg bg-white flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{product.title}</p>
              <p className="text-xl font-bold">{product.name}</p>
              <p>{product.degrees.join(", ")}</p>
              <p>{product.experience}</p>
              <p>{product.hospital}</p>
            </div>
            <div className="flex items-center">
              <img src={product.img} alt="Logo" className="h-12 w-12" />
              <a
                href="#"
                className="text-green-600 ml-4 underline"
              >
                Book Appointment
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
