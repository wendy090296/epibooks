import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const MyNav = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="my-navbar"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="text-white">
            EpiBooks
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-white">
              <Nav.Link href="#features" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Browse
              </Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
