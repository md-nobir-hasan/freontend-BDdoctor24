'use client';
import React, { useState, useEffect } from 'react';

export default function AllSpecialty() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("http://admin.treatmentopportunity.com/api/districts", {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log(data);
        setOptions(data.map(item => ({ label: item.title, value: item.title })));
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  return (
    <div className="flex justify-between max-sm:text-[18px] max-sm:font-[500] text-xl font-semibold items-center max-sm:px-4  px-8 py-4 bg-white shadow-lg rounded-lg">
      <div>
        <p>All Specialty</p>
      </div>
      <div className="flex gap-2 max-sm:text-[18px] max-sm:font-[500] text-xl font-semibold">
        <p>Show</p>
        <select className="bg-slate-300 px-4">
          {options.map(option => (
            <option className='text-white' key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
