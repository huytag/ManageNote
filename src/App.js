import "./App.css";
import Navbar from "../src/Components/TopMenu/Navbar";
import Content from "../src/Components/Content/Content";
import Footer from "../src/Components/Footer/Footer";
import AlertInfo from "../src/Components/AlertInfo";

function App() {
  return (
    <div>
      <Navbar />
      <AlertInfo />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
