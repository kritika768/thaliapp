import style from "./Menu.module.css";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
const Menu = () => {
  const productData = useSelector((state) => state.order.products);

  // const allProduct = () =>{
  //  productData.map((ele, i) => (
  //    <div key={i}>
  //     <Product  data={ele} />
  //     </div>
  //   ))
  // }
  return (
    <>
      <h1>Our Menu</h1>
      <div className={style.cont}>
          {productData.map((ele, i) => (
            <div key={i} >
              <Product data={ele} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Menu;
