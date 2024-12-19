import { ResultsContainer, SearchContainer, Text } from "../components";
import SearchContextProvider from "../components/context/searchContext";

function Home() {
  return (
    <div className="w-full">
      <Text className="block mb-4 text-left text-xl font-bold">Book Search</Text>
      <SearchContextProvider>
        <SearchContainer>
          <ResultsContainer />
        </SearchContainer>
      </SearchContextProvider>
    </div>
  );
}

export default Home;
