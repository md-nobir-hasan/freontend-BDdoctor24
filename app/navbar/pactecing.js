"use client";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function PactecingDay() {
  const [show, setShow] = useState(true);
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
              htmlFor="check-md"
              className="text-xl font-semibold mb-2 flex gap-2"
            >
              <input id="check-md" type="checkbox" className="w-4" />
              Sat
            </label>
            <label
              htmlFor="check-ms"
              className="text-xl font-semibold mb-2 flex gap-2"
            >
              <input id="check-ms" type="checkbox" className="w-4" />
              Sun
            </label>
            <label
              htmlFor="check-fcps"
              className="text-xl font-semibold mb-2 flex gap-2"
            >
              <input id="check-fcps" type="checkbox" className="w-4" />
              Mon
            </label>
            <label
              htmlFor="check-m.phil"
              className="text-xl font-semibold mb-2 flex gap-2"
            >
              <input id="check-m.phil" type="checkbox" className="w-4" />
              Tue
            </label>
          </div>
          <div>
            <label
              htmlFor="check-diploma"
              className="text-xl font-semibold mb-2 flex gap-2"
            >
              <input id="check-diploma" type="checkbox" className="w-4" />
              Web
            </label>
            <label
              htmlFor="check-diploma"
              className="text-xl font-semibold mb-2 flex gap-2"
            >
              <input id="check-diploma" type="checkbox" className="w-4" />
              Thu
            </label>
            <label
              htmlFor="check-diploma"
              className="text-xl font-semibold mb-2 flex gap-2"
            >
              <input id="check-diploma" type="checkbox" className="w-4" />
              Fri
            </label>
          </div>
        </div>
        <div className="px-8 py-4">
            <div className="flex justify-between">
                <p>Morning</p>
                <p>Evening</p>
            </div>
            <div className="mt-2 h-4 w-full bg-zinc-300 rounded-lg flex">
                <span className="bg-blue-900 w-full rounded-xl"></span>
                <span className="w-full rounded-xl"></span>
            </div>
        </div>
       </div>

      )}
    </div>
  );
}
