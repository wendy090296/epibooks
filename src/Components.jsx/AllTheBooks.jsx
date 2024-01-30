import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Books from "./books/romance.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="gap-4 justify-content-center">
        {Books.map((book) => {
          return (
            <Card
              style={{ width: "20rem" }}
              className="col-12 col-md-6 col-lg-3"
              key={book.asin}
            >
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}$</Card.Text>
                <Button variant="dark">Get it now!</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
