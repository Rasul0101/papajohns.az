// import React from 'react'
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Papadias from "./pages/Papadias";
import Lunch from "./pages/Lunch";
import Salad from "./pages/Salad";
import Drink from "./pages/Drink";
import Dessert from "./pages/Dessert";
import Sauce from "./pages/Sauce";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/papadias" element={<Papadias />} />
        <Route exact path="/pizza" element={<Pizza />} />
        <Route exact path="/lunch" element={<Lunch />} />
        <Route exact path="/salad" element={<Salad />} />
        <Route exact path="/drink" element={<Drink />} />
        <Route exact path="/dessert" element={<Dessert />} />
        <Route exact path="/sauce" element={<Sauce />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
