import "bootswatch/dist/vapor/bootstrap.min.css";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
