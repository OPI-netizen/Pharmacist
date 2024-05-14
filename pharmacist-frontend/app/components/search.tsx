
import React, { useState } from 'react';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search Term:', searchTerm);
  };

  return (
    <div className="flex flex-col p-2 py-5 min-h-0">
      <form onSubmit={handleSubmit} className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" style={{top: '5px'}}>
        <button type="button" className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
          <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <input
          className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />

        <button type="submit" className="bg-green-800 p-2 hover:bg-green-400 cursor-pointer mx-2 rounded-full">
          <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

