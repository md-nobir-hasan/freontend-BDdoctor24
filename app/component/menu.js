'use client';
import React, { useState, useEffect } from 'react';

export default function AllSpecialty() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("https://admin.treatmentopportunity.com/api/districts", {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setOptions(data.data.map(item => ({ label: item.title, value: item.title })));
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  return (
    <div className="flex sm:flex-row justify-between items-center max-sm:text-[18px] max-sm:font-[500] text-xl font-semibold max-sm:px-2 sm:px-8 py-4 max-sm:py-2 max-sm:mt-[4px] bg-white shadow-lg rounded-lg">
    <div className="flex items-center justify-center">
      <p className="max-sm:text-[14px] max-lg:text-[18px] text-center sm:text-left">All Specialty</p>
    </div>
    <div className="flex items-center max-sm:gap-[2px] gap-2 max-sm:text-[14px] max-lg:text-[18px] max-sm:font-[500] text-xl font-semibold">
      <p>Show</p>
      <select className="bg-slate-300 max-sm:text-[12px] max-lg:text-[16px] text-black rounded-lg max-sm:px-2 px-4 py-2 max-sm:w-32">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
  
  
  );
}
