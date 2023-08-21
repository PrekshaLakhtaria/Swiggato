import Header from "./components/header";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";
import MenuScreen from "./screens/MenuScreen";

function App() {
  return (
    <>
      <AnimatePresence>
        <Header key="1" />
        <BrowserRouter>
          {/* <HomePage key="2"/>  */}
          {/* <Menu key="3"/> */}
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/menu" element={<MenuScreen/>} />
            <Route path="/cart" element={<CartScreen/>} />
          </Routes>
        </BrowserRouter>
        <Footer key="4" />
      </AnimatePresence>
    </>
  );
}

export default App;
