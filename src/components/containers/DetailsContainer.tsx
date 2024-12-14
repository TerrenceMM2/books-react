import { useParams } from "@tanstack/react-router";
import { useMutationState } from "@tanstack/react-query";
import { Details } from "../modules";
import { Volume } from "../../api";

const DetailsContainer = () => {
  const { volumeId } = useParams({ strict: false });

  const results = useMutationState({
    filters: { mutationKey: ["searchResults"] },
    select: (store) => {
      const volumes = store.state.data as Volume[];
      return volumes.find((volume) => volume.id === volumeId) as Volume;
    },
  });

  return <>{results ? <Details volume={results[0]} /> : "No data"}</>;
};

export default DetailsContainer;
