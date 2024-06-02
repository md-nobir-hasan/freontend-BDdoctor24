"use client";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function ExperienceRange() {
  const [experience, setExperience] = useState([0, 55]);
  const [show, setShow] = useState(true);

  function handleShowClick() {
    setShow(!show);
  }

  const handleSliderChange = (event) => {
    const value = event.target.value.split(",").map(Number);
    setExperience(value);
  };

  return (
    <div className="flex flex-col p-4 shadow-lg rounded-lg bg-white">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xl font-semibold">Experience (Yrs)</p>
        <button onClick={handleShowClick}>
          {show ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
        </button>
      </div>
    {show &&
    <div>
    <div className="flex items-center">
        <input
          type="range"
          min="0"
          max="55"
          value={experience}
          onChange={handleSliderChange}
          className="w-full"
          multiple
        />
      </div>
      <div className="flex justify-between mt-2">
        <input
          type="number"
          value={experience[0]}
          onChange={(e) =>
            setExperience([Number(e.target.value), experience[1]])
          }
          className="w-12 text-center border border-gray-300 rounded"
        />
        <input
          type="number"
          value={experience[1]}
          onChange={(e) =>
            setExperience([experience[0], Number(e.target.value)])
          }
          className="w-12 text-center border border-gray-300 rounded"
        />
      </div>
    </div>
    }
    </div>
  );
}
