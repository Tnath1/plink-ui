import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/homePage/HomePage";

function App() {
  return (
    <>
      <div className="layout">
        <div className="navbarr">
          <Navbar />
        </div>
        <div className="content">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
