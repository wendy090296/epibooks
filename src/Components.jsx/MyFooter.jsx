import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyFooter = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="mt-auto justify-content-center "
    >
      <Nav>
        <Nav.Link href="#">Contatti </Nav.Link>
        <Nav.Link href="#">Privacy</Nav.Link>
        <Nav.Link href="#">Servizi</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyFooter;
