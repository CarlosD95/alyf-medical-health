import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CSS/Layout.css';

export default function Layout() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar sticky="top" style={{fontSize: '16px', backgroundColor: '#0f1430'}} key={expand} expand={expand} className="mb-3">
          <Container  fluid>
            <Navbar.Brand style={{color: '#FFF', fontFamily: 'Cormorant Garamond', fontSize: '30px'}} className='ms-5' href="/"> alyf</Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor: '#F3F4F5'}}  aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              style={{backgroundColor: '#0f1430', color: '#FFF'}}
            >
              <Offcanvas.Header style={{color: '#FFF'}}  closeButton>
                <Offcanvas.Title style={{fontFamily: "Cormorant Garamond", fontSize: '30px'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  alyf
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 px-5">
                  <Nav.Link style={{color: '#FFF'}} className='px-4 link' href="/">Home</Nav.Link>
                  <Nav.Link style={{color: '#FFF'}} className='px-4 link' href="/about">About</Nav.Link>
                  <Nav.Link style={{color: '#FFF'}} className='px-4 link' href="/contact">Contact</Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}