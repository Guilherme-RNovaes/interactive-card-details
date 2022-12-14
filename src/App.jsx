import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button"
import Input from "./components/Input"
import Home from "./components/Home"
import Agradecimentos from "./components/Agradecimentos"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/agradecimentos" element={ <Agradecimentos /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
