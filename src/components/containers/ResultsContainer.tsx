import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Result } from "../modules";
import { useSearchContext } from "../context/searchContext";
import type { Volume } from "../../api";

const ResultsContainer: FC = () => {
  const { searchTerm, page } = useSearchContext();
  const { data } = useQuery({ queryKey: [`${searchTerm}-results`, page] });
  const results = data as Volume[];

  return (
    <div className="pt-6">
      {results?.length > 0
        ? results.map((volume, index) => <Result key={`${volume.id}-${index}`} result={volume} />)
        : null}
    </div>
  );
};

export default ResultsContainer;
