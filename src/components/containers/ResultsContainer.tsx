import { useMutationState } from "@tanstack/react-query";
import { Result } from "../modules";
import { Volume } from "../../api";

const ResultsContainer = () => {
  const results = useMutationState({
    filters: { mutationKey: ["searchResults"] },
    select: (store) => store.state.data as Volume[],
  });

  return (
    <div>
      {results[0]?.length > 0
        ? results[0].map((volume, index) => <Result key={`${volume.id}-${index}`} result={volume} />)
        : null}
    </div>
  );
};

export default ResultsContainer;
