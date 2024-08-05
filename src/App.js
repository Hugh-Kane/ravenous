import './App.css';
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'
import Business from './Business';
import businessDetails from './businessDetails';
import BusinessList from './BusinessList';
import Search from './Search';
import Filter from './Filter';
import Top from './Top';

function App() {

  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'white', // Set your desired background color here
        },
      },
    },
  })
  

  const businesses = [businessDetails, businessDetails, businessDetails,businessDetails,businessDetails,businessDetails]
  return (
    <ChakraProvider theme={theme}>
      <Box bg='white' minHeight="100vh">
      <div className="App">
          <Top />
          <Filter/>
          <Search />
          <BusinessList businesses={businesses}/>
        
      </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
