import "./App.css";
import MyNav from "./Components.jsx/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./Components.jsx/MyFooter";
// import Welcome from "./Components.jsx/Welcome";
// import BookList from "./Components.jsx/BookList";
import books from "./Components.jsx/books/history.json";
import { Container, Row } from "react-bootstrap";
import BookList from "./Components.jsx/BookList";

// books é il mio array di oggetti !
// oneBook é UN OGGETTO dell'array books !
function App() {
  return (
    <>
      <div className="App">
        <header className="">
          <MyNav />
        </header>
        <main>
          <Container>
            <Row className="justify-content-center">
              <BookList jsonOfBooks={books} />
            </Row>
          </Container>
          {/* <Welcome />
          <BookList oneBook={Books} /> */}
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
