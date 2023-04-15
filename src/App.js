import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Aboutus from "./pages/Aboutus";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import PaymentDone from "./pages/PaymentDone";
import Location from "./pages/Location";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menuitem" element={<Menu />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/location" element={<Location />} />
            <Route path="/payment-done" element={<PaymentDone />} />
          </Routes>
      </main>
      <Footer/>
      </div>
    // </AnimatePresence>
  );
};

export default App;
