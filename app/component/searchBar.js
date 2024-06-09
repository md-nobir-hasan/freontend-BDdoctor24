'use client'
import React, { useState } from 'react';
import { FiActivity } from "react-icons/fi";

const SearchBarHome = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
  
  );
};

export default SearchBarHome;
