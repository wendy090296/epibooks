import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Container, Row } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class BookList extends Component {
  //questo componente riceve un json dalle props

  state = {
    searchValue: "", // stato INIZIALE
    initialAsin: null, // valore di asin iniziale del libro selezionato
    comments: [],
  };

  // funzione che sovrascrive asin

  changeAsin = (newAsin) => {
    this.setState({
      currentAsin: newAsin,
    });
  };

  // fetch dei commenti utilizzando l'asin

  fetchReviews() {
    const { initialAsin } = this.state;
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${initialAsin}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBmYTViMjYxNTAwMTk4YTY5NTAiLCJpYXQiOjE3MDY3OTUyNTgsImV4cCI6MTcwODAwNDg1OH0.OS7BwSmuBObJTi9NSJxWK9rNr_h9PJfVgKz_DxNbgM0",
        },
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione del server");
        }
      })
      .then((reviews) => {
        console.log("Nuovo array di feedback", reviews);
        // setto nuovo stato con i commenti risultati dall'array
        this.setState({
          comments: reviews,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  // gestisco aggiornamento del componente, verificando se l'asin é diverso da quello iniziale
  componentDidUpdate(prevProps, prevState) {
    if (prevState.initialAsin !== this.state.currentAsin) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <>
        <Form.Control
          className="my-3 "
          placeholder="Cerca i tuoi libri"
          value={this.state.searchValue}
          onChange={(e) => {
            this.setState({ searchValue: e.target.value });
          }}
        />
        <Container>
          <Row>
            <Col>
              <Row>
                {this.props.jsonOfBooks
                  .filter((book) =>
                    book.title
                      .toLowerCase()
                      .includes(this.state.searchValue.toLowerCase())
                  )
                  .map((book) => (
                    <Col xs={12} md={6} lg={4} xl={3} key={book.asin}>
                      <SingleBook oneBook={book} />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col xs={6}>
              
            {this.state.initialAsinAsin && <CommentArea asin={this.state.initialAsin} comments={this.state.comments}/>
            // mostra i commenti se viene selezionato un libro
            </Col>
          }
          </Row>
        </Container>
      </>
    )
    
    
export default BookList;
