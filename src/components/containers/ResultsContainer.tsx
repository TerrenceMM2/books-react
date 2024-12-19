import type { FC } from "react";
import { useMutationState } from "@tanstack/react-query";
import { Result } from "../modules";
import { Volume } from "../../api";

const ResultsContainer: FC = () => {
  const results = useMutationState({
    filters: { mutationKey: ["searchResults"] },
    select: (store) => store.state.data as Volume[],
  });

  return (
    <div>
      {results[results.length - 1]?.length > 0
        ? results[results.length - 1].map((volume, index) => <Result key={`${volume.id}-${index}`} result={volume} />)
        : null}
    </div>
  );
};

export default ResultsContainer;
