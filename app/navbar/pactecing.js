"use client";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function PactecingDay() {
  const [show, setShow] = useState(true);
  const [selectedTime, setSelectedTime] = useState("morning");

  function handleShowClick() {
    setShow(!show);
  }

  return (
    <div className="flex flex-col p-4 shadow-lg rounded-lg bg-white">
      <div className="flex justify-between">
        <div className="mb-2">
          <p className="text-xl font-semibold">Pactecing day</p>
        </div>
        <div>
          <button onClick={handleShowClick}>
            {show ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
          </button>
        </div>
      </div>
      {show && (
        <div>
          <div className="flex gap-14">
            <div>
              <label
                htmlFor="check-sat"
                className="text-xl font-semibold mb-2 flex gap-2"
              >
                <input id="check-sat" type="checkbox" className="w-4" />
                Sat
              </label>
              <label
                htmlFor="check-sun"
                className="text-xl font-semibold mb-2 flex gap-2"
              >
                <input id="check-sun" type="checkbox" className="w-4" />
                Sun
              </label>
              <label
                htmlFor="check-mon"
                className="text-xl font-semibold mb-2 flex gap-2"
              >
                <input id="check-mon" type="checkbox" className="w-4" />
                Mon
              </label>
              <label
                htmlFor="check-tue"
                className="text-xl font-semibold mb-2 flex gap-2"
              >
                <input id="check-tue" type="checkbox" className="w-4" />
                Tue
              </label>
            </div>
            <div>
              <label
                htmlFor="check-wed"
                className="text-xl font-semibold mb-2 flex gap-2"
              >
                <input id="check-wed" type="checkbox" className="w-4" />
                Wed
              </label>
              <label
                htmlFor="check-thu"
                className="text-xl font-semibold mb-2 flex gap-2"
              >
                <input id="check-thu" type="checkbox" className="w-4" />
                Thu
              </label>
              <label
                htmlFor="check-fri"
                className="text-xl font-semibold mb-2 flex gap-2"
              >
                <input id="check-fri" type="checkbox" className="w-4" />
                Fri
              </label>
            </div>
          </div>
          <div className="px-8 py-4">
            <div className="flex justify-between">
              <p>Morning</p>
              <p>Evening</p>
            </div>
            <div className="mt-2 h-4 w-full bg-zinc-300 rounded-lg flex justify-between items-center">
            <button onClick={ () => setSelectedTime('morning')}
            className={`transition duration-700 ease-in-out h-full w-20 rounded-xl ${
              selectedTime ==='morning' ? 'bg-blue-900':'bg-zinc-300'
            }`}
            >
           
              </button>
              <button
                onClick={() => setSelectedTime("evening")}
                className={`transition duration-700 ease-in-out h-full w-20 rounded-xl ${
                  selectedTime === "evening" ? "bg-blue-900" : "bg-zinc-300"
                }`}
              >
                
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
