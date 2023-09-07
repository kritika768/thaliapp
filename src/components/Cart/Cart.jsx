import { useSelector } from "react-redux";

const Cart = () => {
  const thali = useSelector((state) => state.order.thali);
  return (
    <>
      <h1>No. of items in your cart</h1>
      <h3>{thali.length}</h3>
    </>
  );
};

export default Cart;
