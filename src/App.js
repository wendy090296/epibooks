import "./App.css";
import MyNav from "./Components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import BookList from "./Components/BookList";
import books from "./Components/books/history.json";
import { Container, Row } from "react-bootstrap";

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
              <Welcome />

              <BookList jsonOfBooks={books} />
            </Row>
          </Container>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
