import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <>
      <AnimatePresence>
        <div>
          <Header />
          <HomePage />
          <Services/>
          <Footer/>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
