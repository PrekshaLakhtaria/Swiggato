import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";

import Menu from "./screens/Menu";

function App() {
  return (
    <>

      <AnimatePresence>
        <Header />
        <HomePage />
      </AnimatePresence>  
    </>
  );
}

export default App;
