import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   selectedBook: null,
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const changeSelectedBook = (asin) => {
    // this.setState({
    //   selectedBook: asin,
    // });

    setSelectedBook({
      selectedBook: asin,
    });
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={6} lg={3} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="g-2 mt-3">
            {props.books
              .filter((b) => b.title.includes(searchQuery))
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={selectedBook}
                    changeSelectedBook={changeSelectedBook}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
