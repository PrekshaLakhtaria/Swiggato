import Header from "./components/header";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";
import MenuScreen from "./screens/MenuScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <>
      <AnimatePresence>
        <Header key="1" />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </BrowserRouter>

        <Footer key="4" />
      </AnimatePresence>
    </>
  );
}

export default App;
