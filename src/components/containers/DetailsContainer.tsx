import { useParams } from "@tanstack/react-router";
import { createMockVolumeList } from "../../__mock__";
import { Details } from "../modules";

const DetailsContainer = () => {
  const { volumeId } = useParams({ strict: false });

  const volume = createMockVolumeList().find((volume) => volume.id === volumeId)!;

  return <Details volume={volume} />;
};

export default DetailsContainer;
