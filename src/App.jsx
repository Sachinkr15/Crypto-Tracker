import React from "react";
import "./App.css";
import Routing from "./Components/Routing/Routing";
// import { CurrencyContext } from "./Context/CurrencyContext";

function App() {
  // const [currency, setCurrency] = useState("usd");
  return (
    // <CurrencyContext.Provider value={{ currency, setCurrency }}>
    // </CurrencyContext.Provider>
    <Routing />
  );
}

export default App;
