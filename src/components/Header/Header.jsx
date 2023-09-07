import { Container, Nav, Navbar } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import routes from "./../../routes/routes.json";
import { Button } from "react-bootstrap/";
import { useSelector } from "react-redux";

const Header = () => {
  const thali = useSelector((state) => state.order.thali);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Thali App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to={routes.HOME}>Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={routes.MENU}>Menu</NavLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <NavLink to={routes.CART}>
                  <Button variant="secondary">
                    <i className="bi bi-cart-plus-fill"></i> 
                    <span style={{marginLeft: "5px"}}>{thali.length}</span>
                  </Button>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={routes.CHECKOUT}>
                  <Button variant="warning">Checkout</Button>
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
