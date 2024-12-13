import React, { useState } from "react";
import Input from "../elements/Input";

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    setSearchTerm(value);
  };

  return <Input onChange={handleOnChange} />;
};

export default SearchContainer;
