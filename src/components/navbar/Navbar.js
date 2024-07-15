import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




function CollapsibleExample() {
  const cart_data = useSelector((state) => state.ProductData.cartData);
  const cartLength=cart_data.length
  
  return (
    <Navbar collapseOnSelect expand="lg" className=" shadow bg-white"  bg='light' data-bs-theme="light">
      <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
           <Nav.Link as={Link} to='/' className="mx-2">Home</Nav.Link>
           <Nav.Link href="#" className="mx-2">shop</Nav.Link>
           <Nav.Link as={Link}  to='/Cart'className="mx-2">cart</Nav.Link>
           <Nav.Link className="mx-2" ><FontAwesomeIcon icon={faUser} /></Nav.Link>
           <Nav.Link as={Link}  to='/Cart' className="mx-2"><FontAwesomeIcon icon={faCartShopping} />{cartLength}
           </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;