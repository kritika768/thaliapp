import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";
import routes from "./routes.json";
import Checkout from "../components/Checkout/Checkout";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home/>}/>
        <Route path={routes.MENU} element={<Menu/>}/>
        <Route path={routes.CART} element={<Cart/>}/>
        <Route path={routes.CHECKOUT} element={<Checkout/>}/>
      </Routes>
    </>
  );
};

export default PageRoutes;
