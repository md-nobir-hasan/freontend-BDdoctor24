'use client'
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function HospitalWise () {
    const [show, setShow] = useState(true);
     function handleShowClick () {
        setShow(!show)
     }
    return(
        <div className="flex flex-col p-4 shadow-lg rounded-lg bg-white">
          <div className="flex justify-between">
          <div className="mb-2">
            <p className="text-xl font-semibold">
                Hospital wise
            </p>
          </div>
            <div>
               <button onClick={handleShowClick}>
               {show ? <AiOutlineDown size={20}/> : <AiOutlineUp size={20}/>}
               </button>
            </div>
          </div>
           {show && 
           <div className="flex flex-col">
           <label htmlFor="check-md" className="text-xl font-semibold mb-2 flex gap-2">
                <input id="check-md" type="checkbox" className="w-4" />
               Labaid Hospital
            </label>
            <label htmlFor="check-ms" className="text-xl font-semibold mb-2 flex gap-2">
                <input id="check-ms" type="checkbox" className="w-4" />
               Square Hospital
            </label>
            <label htmlFor="check-fcps" className="text-xl font-semibold mb-2 flex gap-2">
                <input id="check-fcps" type="checkbox" className="w-4" />
                Ibn Sina Hospital
            </label>
            <label htmlFor="check-m.phil" className="text-xl font-semibold mb-2 flex gap-2">
                <input id="check-m.phil" type="checkbox" className="w-4" />
                Central Hospital
            </label>
            <label htmlFor="check-diploma" className="text-xl font-semibold mb-2 flex gap-2">
                <input id="check-diploma" type="checkbox" className="w-4"/>
                Green Life Hospital
            </label>
            <label htmlFor="check-diploma" className="text-xl font-semibold mb-2 flex gap-2">
                <input id="check-diploma" type="checkbox" className="w-4"/>
                Popular Diagnostics
            </label>
            <label htmlFor="check-diploma" className="text-xl font-semibold mb-2 flex gap-2">
                <input id="check-diploma" type="checkbox" className="w-4"/>
                Aich Medical Collage
            </label>
            <label htmlFor="check-diploma" className="text-xl font-semibold mb-2 flex gap-2">
                <input id="check-diploma" type="checkbox" className="w-4"/>
                AI Manar Hospital
            </label>
           </div>
           }
        </div>
    )
}