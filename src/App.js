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
  //const [filter,setFilter] = useState("bestMatch")

  const handleFilterClick = ({ target }) => {
    const { name } = target;
    setSearchTerm((prev) => ({ ...prev, filter: name }));
  };

  const handleSearchChange = ({ target }) => {
    const { name, value } = target;
    setSearchTerm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    //alert(JSON.stringify(searchTerm,"",2))
    fetchData(
      searchTerm.searchBusiness,
      searchTerm.location,
      searchTerm.filter
    );
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

  async function fetchData(business, location, filter) {
    const data = await getSearchResults(business, location, filter);
    console.log("Fetched results:", data);
    setRestaurant(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box bg="white" minHeight="100vh">
        <div className="App">
          <Top />
          <Filter onClick={handleFilterClick} searchTerm={searchTerm} />
          <Search onChange={handleSearchChange} onClick={handleSearchSubmit} />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <BusinessList businesses={restaurant} />
          )}
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
