import "./App.css";
import MyNav from "./Components.jsx/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./Components.jsx/MyFooter";
import Welcome from "./Components.jsx/Welcome";
import AllTheBooks from "./Components.jsx/AllTheBooks";

function App() {
  return (
    <>
      <div className="App">
        <header className="">
          <MyNav />
        </header>
        <main>
          <Welcome />
          <AllTheBooks />
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
