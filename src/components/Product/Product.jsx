import { useDispatch } from "react-redux";
import { addTothali } from "../../reducers/orderSlice";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const add = (item) => {
    item = JSON.parse(JSON.stringify(item));
    item.quantity = quantity;
    item.totalPrice = Number(item.quantity) * Number(item.price);
    dispatch(addTothali(item));
    console.log(addTothali(item));
  };

  const increase = () => {
   setQuantity(quantity+1)
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity-1)
    }
  };
  return (
    <>
      <Card
        style={{
          width: "18rem",
          marginBottom: "20px",
          marginRight: "20px",
          height: "400px",
        }}
      >
        <Card.Img variant="top" src={data.image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>Rs. {data.price}</Card.Text>
          <Button variant="primary" onClick={() => add(data)}>
            Add to cart
          </Button>
          <div style={{ marginTop: "10px", marginBottom: "15px" }}>
            <Button
              variant="danger"
              style={{ marginRight: "30px" }}
              onClick={decrease}
            >
              -
            </Button>
            <Button variant="light">{quantity}</Button>
            <Button variant="danger" onClick={increase}>
              +
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
