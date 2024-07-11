import React, { useState } from 'react';

const DashboardNav = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="dashboard-nav">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={() => onSearch(searchTerm)}>Search</button>
      </div>
    </nav>
  );
};

export default DashboardNav;
