import React, { useState } from "react";
import Input from "../elements/Input";

const SearchContainer = () => {
  const [, setSearchTerm] = useState<string>("");

  const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  return <Input name="search" label="Book Search" onChange={handleOnChange} />;
};

export default SearchContainer;
