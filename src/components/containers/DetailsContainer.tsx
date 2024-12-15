import { useParams } from "@tanstack/react-router";
import { useMutationState, useQuery } from "@tanstack/react-query";
import { Details } from "../modules";
import { getBookSearch } from "../../api";
import type { Volume } from "../../api";

const DetailsContainer = () => {
  const { volumeId = "" } = useParams({ strict: false });

  const results = useMutationState({
    filters: { mutationKey: ["searchResults"] },
    select: (store) => {
      const volumes = store.state.data as Volume[];
      return volumes.find((volume) => volume.id === volumeId) as Volume;
    },
  });

  const { data: volume } = useQuery({
    queryKey: [`volume-${volumeId}`],
    queryFn: () => getBookSearch(volumeId),
    enabled: !!volumeId && results.length === 0,
  });

  return <>{results.length > 0 ? <Details volume={results[0]} /> : volume ? <Details volume={volume} /> : null}</>;
};

export default DetailsContainer;
