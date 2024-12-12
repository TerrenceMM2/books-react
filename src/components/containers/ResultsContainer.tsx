import { createMockVolumeList } from '../../__mock__'
import { Result } from '../modules';

const volumeList = createMockVolumeList();

const ResultsContainer = () => {
  return (
    <div>{volumeList.map((volume, index) => <Result key={`${volume.id}-${index}`} result={volume} />)}</div>
  )
}

export default ResultsContainer