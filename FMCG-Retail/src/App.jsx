import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Accounts from "./pages/Accounts";
import Mystore from "./pages/Mystore";
import Points from "./pages/Points";
import Snacks from "./pages/Snacks";
import PersonalCare from "./pages/PersonalCare";
import DairyProducts from "./pages/DairyProducts";
import Household from "./pages/Household";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Products />\
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/store" element={<Mystore />} />
        <Route path="/points" element={<Points />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/personalCare" element={<PersonalCare />} />
        <Route path="/household" element={<Household />} />
        <Route path="/dairyProducts" element={<DairyProducts />} />
      </Routes>
    </>
  );
}

export default App;
