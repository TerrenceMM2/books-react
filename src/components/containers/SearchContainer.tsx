import type { FC, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

import { Button, Input, LeftArrow, RightArrow } from "../elements";
import { getBooksSearch } from "../../api";
import { useSearchContext } from "../context/searchContext";

interface SearchContainerProps {
  children: ReactNode;
}

const SearchContainer: FC<SearchContainerProps> = ({ children }) => {
  const { searchTerm, setSearchTerm, page, setPage } = useSearchContext();

  const { data, error, isFetching, refetch } = useQuery({
    queryKey: [`${searchTerm}-results`, page],
    queryFn: () => getBooksSearch(searchTerm, page),
    enabled: false,
  });

  const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  const handlePageChange = (action: string) => {
    if (action === "down" && page === 1) {
      return;
    }

    if (action === "up") {
      setPage(page + 1);
    }

    if (action === "down") {
      setPage(page - 1);
    }
  };

  return (
    <div className="mb-4 flex md:flex-col md:gap-4">
      <div className="flex gap-4 ">
        <Input name="search" onChange={handleOnChange}>
          {error && <div className="text-left text-red-600">{error.message}</div>}
        </Input>
        <Button className="" disabled={isFetching} label="Search" onClick={refetch} />
      </div>
      {children}
      {data && (
        <div className="flex flex-row justify-center gap-4 pb-4 items-center">
          <LeftArrow onClick={handlePageChange} />
          {page}
          <RightArrow onClick={handlePageChange} />
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
