import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { Button, Input } from "../elements";
import { getBookSearch } from "../../api";

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { mutate } = useMutation({
    mutationKey: ["searchResults"],
    mutationFn: (searchTerm: string) => getBookSearch(searchTerm),
  });

  const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Input name="search" label="Book Search" onChange={handleOnChange} />
      <Button label="search" onClick={() => mutate(searchTerm)} />
    </>
  );
};

export default SearchContainer;
