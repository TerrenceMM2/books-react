import React, { useState } from 'react'
import SearchBar from '../elements/SearchBar'

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleOnChange = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value)
    setSearchTerm(value)
  }

  return (
    <SearchBar onChange={handleOnChange}/>
  )
}

export default SearchContainer