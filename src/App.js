import "./App.css";
import MyNav from "./Components.jsx/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./Components.jsx/MyFooter";
import Welcome from "./Components.jsx/Welcome";
import Books from "./Components.jsx/AllTheBooks";
import BookList from "./Components.jsx/BookList";

function App() {
  return (
    <>
      <div className="App">
        <header className="">
          <MyNav />
        </header>
        <main>
          <Welcome />
          <BookList books={Books} />
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
