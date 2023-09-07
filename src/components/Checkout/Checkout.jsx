import { useSelector, useDispatch } from 'react-redux';
import { RemoveItem } from '../../reducers/orderSlice';
import Swal from 'sweetalert2';

const Checkout = () => {
  const thali = useSelector((state) => state.order.thali);
  console.log(thali);
  const despatch = useDispatch();
  const Remove = (id) => {
    despatch(RemoveItem(id));
  };
  const orders = () => {
    if (thali.length < 2) {
      Swal.fire({
        icon: "error",

        title: "Oops...😥😫",

        text: "Order at least 2 item.",
      });
    } else {
      Swal.fire(
        "Ordered sucessfull💙💚🧡!",

        "You clicked the button!",

        "success"
      );
      thali.length = 0;
    }
  };

  var sum = 0;
  for (const item of thali) {
    sum = sum + item.totalPrice;
  }
  return (
    <>
      <div className="container mx-7" style={{textAlign: "center"}}>
        <h1 className="text-center text-danger" style={{marginTop: "20px", marginBottom: "20px"}}>Your Food</h1>
        <div className="row">
          {thali.map((ele, ind) => (
            <div className="col-4">
              <div className="card " key={ind}>
                <img
                  src={ele.image}
                  className="card-img-top"
                  alt="..."
                  width="100px"
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">Quantity: {ele.quantity}</p>
                  <p>Price: ₹ {ele.price}</p>
                  <p>TotalPrice: ₹ {ele.totalPrice}</p>
                  <button
                    onClick={() => Remove(ind)}
                    className="btn btn-primary"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="container text-center  m-2 p-2">
            <button className="btn btn-success" onClick={orders}>
              Order Now <span className="text-warning"> ₹ {sum}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
