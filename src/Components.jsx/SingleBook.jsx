import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./books/scifi.json";

const SingleBook = ({ book }) => {
  return (
    <Card>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Button variant="dark">Buy!</Button>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
