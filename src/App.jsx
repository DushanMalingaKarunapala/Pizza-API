import "./App.css";
import { pizzaData } from "../public/data";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
