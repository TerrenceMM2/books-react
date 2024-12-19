import { useState } from "react";
import type { FC } from "react";
import { useMutation } from "@tanstack/react-query";

import { Button, Input } from "../elements";
import { getBooksSearch } from "../../api";

const SearchContainer: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { mutate, error, isPending, reset } = useMutation({
    mutationKey: ["searchResults"],
    mutationFn: (searchTerm: string, page: number = 1, pageSize: number = 10) =>
      getBooksSearch(searchTerm, page, pageSize),
  });

  const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    reset();
    setSearchTerm(value);
  };

  const handleOnEnter = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      reset();
      mutate(searchTerm);
    }
  };

  return (
    <div className="mb-4 md:flex md:gap-4">
      <Input name="search" onChange={handleOnChange} onKeyDown={handleOnEnter}>
        {error && <div className="text-left text-red-600">{error.message}</div>}
      </Input>
      <Button className="" disabled={isPending} label="Search" onClick={() => mutate(searchTerm)} />
    </div>
  );
};

export default SearchContainer;
