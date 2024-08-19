import "./App.css";
import { ChakraProvider, extendTheme, Box, Image } from "@chakra-ui/react";
import Business from "./Business";
import businessDetails from "./businessDetails";
import BusinessList from "./BusinessList";
import Search from "./Search";
import Filter from "./Filter";
import Top from "./Top";
import getSearchResults from "./utils/textSearchAPI";
import { useState, useEffect } from "react";

function App() {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState({});
  const [shouldFetch, setShouldFetch] = useState(false);
  const [pageToken, setNextPageToken] = useState("");

  const handleFilterClick = ({ target }) => {
    const { name } = target;
    if (searchTerm.filter !== name) {
      setSearchTerm((prev) => ({ ...prev, filter: name }));
      setShouldFetch(true);
    }
  };

  const handleSearchSubmit = (localSearchTerm) => {
    setSearchTerm(localSearchTerm);
    setShouldFetch(true);
  };

  const handleAppendResults = (event) => {
    event.preventDefault();
    fetchData(true);
  };

  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "white", // Set your desired background color here
        },
      },
    },
  });

  async function fetchData(isAppending = false) {
    if (!isAppending) {
      setLoading(true);
    }
    const [data, nextPageToken] = await getSearchResults(
      searchTerm.searchBusiness,
      searchTerm.location,
      searchTerm.filter,
      isAppending ? pageToken : undefined
    );
    setNextPageToken(nextPageToken);
    console.log("Fetched results:", data);
    isAppending
      ? setRestaurant((prevData) => [...prevData, ...data])
      : setRestaurant(data);
    if (!isAppending) {
      setLoading(false);
    }
    setShouldFetch(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [shouldFetch]);

  return (
    <ChakraProvider theme={theme}>
      <Box bg="white" minHeight="100vh">
        <div className="App">
          <Top />
          <Filter onClick={handleFilterClick} searchTerm={searchTerm} />
          <Search onSubmit={handleSearchSubmit} />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <BusinessList
              businesses={restaurant}
              handleAppendResults={handleAppendResults}
            />
          )}
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
