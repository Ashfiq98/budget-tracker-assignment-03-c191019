import AddEntry from "./components/AddEntry/AddEntry";
import Header from "./components/Header/Header";
import Listing from "./components/Listing/Listing";

import EntriesContextProvider from "./context/EntriesContext";
function App() {
 
  // console.log(totalIncome)
  return (
    <EntriesContextProvider>
      <Header />
      <AddEntry />
      <Listing />
    </EntriesContextProvider>
    
  );
}

export default App;
