import "./App.css";
import { useGlobalContext } from "./context";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Footer from "./components/footer";
import Future from "./pages/future";
import About from "./pages/about";
import Donation from "./pages/donation";
import Techies from "./pages/techies";
import Past from "./pages/past";

function App() {
  const {} = useGlobalContext();
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='future' element={<Future />} />
        <Route path='about' element={<About />} />
        <Route path='donation' element={<Donation />} />
        <Route path='techies' element={<Techies />} />
        <Route path='past' element={<Past />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
