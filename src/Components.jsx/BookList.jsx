import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form } from "react-bootstrap";

class BookList extends Component {
  //questo componente riceve un json dalle props

  state = {
    searchValue: "",
  };

  render() {
    return (
      <>
        <Form.Control
          className="my-3"
          placeholder="Cerca i tuoi libri"
          value={this.state.searchValue}
          onChange={(e) => {
            this.setState({ searchValue: e.target.value });
          }}
        />
        {this.props.jsonOfBooks
          .filter((book) => book.title.includes(this.state.searchValue))
          .map((book) => (
            <Col xs={12} md={6} lg={4} xl={3} key={book.asin}>
              <SingleBook oneBook={book} />
            </Col>
          ))}
      </>
    );
  }
}

export default BookList;
