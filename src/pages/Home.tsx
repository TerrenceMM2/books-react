import { ResultsContainer, SearchContainer, Text } from "../components";

function Home() {
  return (
    <div className="w-full">
      <Text className="block mb-4 text-left text-xl font-bold">Book Search</Text>
      <SearchContainer />
      <ResultsContainer />
    </div>
  );
}

export default Home;
