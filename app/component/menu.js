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
    <div className="flex flex-col sm:flex-row justify-between items-center max-sm:text-[18px] max-sm:font-[500] text-xl font-semibold max-sm:px-4 sm:px-8 py-4 bg-white shadow-lg rounded-lg">
    <div className="mb-2 sm:mb-0">
      <p className="text-center sm:text-left">All Specialty</p>
    </div>
    <div className="flex items-center gap-2 max-sm:text-[18px] max-sm:font-[500] text-xl font-semibold">
      <p>Show</p>
      <select className="bg-slate-300 text-black rounded-lg px-4 py-2">
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
