import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { Button, Input } from "../elements";
import { getBookSearch } from "../../api";

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { mutate, error, isPending, reset } = useMutation({
    mutationKey: ["searchResults"],
    mutationFn: (searchTerm: string) => getBookSearch(searchTerm),
  });

  const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    reset();
    setSearchTerm(value);
  };

  return (
    <div className="mb-4 md:flex md:gap-4">
      <Input name="search" onChange={handleOnChange}>
        {error && <div className="text-left text-red-600">{error.message}</div>}
      </Input>
      <Button className="" disabled={isPending} label="Search" onClick={() => mutate(searchTerm)} />
    </div>
  );
};

export default SearchContainer;
