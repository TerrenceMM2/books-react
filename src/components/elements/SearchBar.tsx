import React from 'react'

interface SearchBarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange } : SearchBarProps) => {
  return (
    <div className='flex flex-col w-full pb-4'>
      <label className='self-start' htmlFor="search-bar">Search</label>
      <input type='text' id='search-bar' name="search-bar" onChange={onChange}/>
    </div>
  )
}

export default SearchBar