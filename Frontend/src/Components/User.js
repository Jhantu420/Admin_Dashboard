import './Contributer.css'
import React, { useState } from 'react';
export default function User() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearch=()=>{

  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <h5 id='head'>Enter any keyword and press the search button to get audio data...</h5>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onKeyPress={handleKeyPress}
          onChange={handleSearchChange}
          className='search-input'
        />
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>
    </div>
  );

}