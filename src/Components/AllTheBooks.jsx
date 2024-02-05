import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Books from "./books/romance.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="gap-4 justify-content-center">
        {Books.map((book) => {
          return (
            <Col>
              <Card className="h-100" key={book.asin}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}$</Card.Text>
                  <Button variant="dark">Get it now!</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
