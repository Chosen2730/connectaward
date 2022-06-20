import "./App.css";
import { useGlobalContext } from "./context";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Footer from "./components/footer";
import Future from "./pages/future";

function App() {
  const {} = useGlobalContext();
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='future' element={<Future />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
