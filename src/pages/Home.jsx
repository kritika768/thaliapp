import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import routes from './../routes/routes.json'
const Home = () => {
  return (
    <>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bpimaging.com/assets/uploads/2019/03/1_food_grouping-1024x560.jpg"
            alt="First slide"
            style={{height:"400px"}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg"
            alt="Second slide"
            style={{height:"400px"}}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.tubikstudio.com/wp-content/uploads/2018/04/burger-app-food-delivery-ui-case-study-tubik-1-1.jpg"
            alt="Third slide"
            style={{height:"400px"}}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 style={{marginBottom:"20px",marginTop:"20px", color: "green"}}>To Order Food Click Below!</h2>
      <NavLink to={routes.MENU}>
        <Button variant="secondary">Order now</Button>
      </NavLink>
    </>

  
    
  );
};

export default Home;
