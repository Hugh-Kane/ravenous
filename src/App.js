import "./App.css";
import {
  ChakraProvider,
  extendTheme,
  Box,
  Image,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Link,
} from "@chakra-ui/react";
import Business from "./Business";
import businessDetails from "./businessDetails";
import BusinessList from "./BusinessList";
import Search from "./Search";
import Filter from "./Filter";
import Top from "./Top";
import getSearchResults from "./utils/textSearchAPI";
import { useState, useEffect, useCallback, useRef } from "react";
import { debounce } from "lodash";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState({ filter: "bestMatch" });
  const [pageToken, setNextPageToken] = useState("");

  const pageTokenRef = useRef(pageToken);
  const searchTermRef = useRef(searchTerm);

  useEffect(() => {
    pageTokenRef.current = pageToken;
    searchTermRef.current = searchTerm;
  }, [pageToken, searchTerm]);

  const handleFilterClick = ({ target }) => {
    const { name } = target;
    if (searchTerm.filter !== name) {
      setSearchTerm((prev) => ({ ...prev, filter: name }));
    }
  };

  const handleSearchSubmit = (localSearchTerm) => {
    setSearchTerm((prev) => ({ ...prev, ...localSearchTerm }));
  };

  const handleDebouncedAppendResults = useCallback(
    debounce((event) => {
      event.preventDefault();
      fetchData(true);
    }, 500),
    []
  );
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

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fetchData(isAppending = false) {
    console.log("this is the search term");
    console.log(searchTerm);
    if (!isAppending) {
      setLoading(true);
    }
    await delay(1000);
    const [data, nextPageToken] = await getSearchResults(
      searchTermRef.current.searchBusiness,
      searchTermRef.current.location,
      searchTermRef.current.filter,
      isAppending ? pageTokenRef.current : undefined
    );
    setNextPageToken(nextPageToken);
    console.log("Fetched results:", data);
    isAppending
      ? setRestaurant((prevData) => [...prevData, ...data])
      : setRestaurant(data);
    if (!isAppending) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <ChakraProvider theme={theme}>
      <Box bg="white" minHeight="100vh">
        <div className="App">
          <Top />
          <Filter onClick={handleFilterClick} searchTerm={searchTerm} />
          <Search onSubmit={handleSearchSubmit} />
          <BusinessList
            businesses={restaurant}
            handleAppendResults={handleDebouncedAppendResults}
            isLoading={isLoading}
          />
        </div>
      </Box>
      <Analytics />
    </ChakraProvider>
  );
}

export default App;
