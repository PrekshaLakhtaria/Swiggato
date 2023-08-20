import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";

import Menu from "./screens/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>

      <AnimatePresence>
         <Header />
        {/* <HomePage />  */}
        <Menu/>
        <Footer/>
      </AnimatePresence>  
    </>
  );
}

export default App;
