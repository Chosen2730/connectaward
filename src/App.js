import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Footer from "./components/footer";
import Future from "./pages/future";
import About from "./pages/about";
import Donation from "./pages/donation";
import Techies from "./pages/techies";
import Past from "./pages/past";
import Categories from "./pages/categories";
import Votes from "./pages/vote";
import Power from "./pages/power";
import Nominate from "./pages/nominate";
import Login from "./pages/login";
import Signin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signin' element={<Signin />} />
        <Route path='home' element={<Home />} />
        <Route path='future' element={<Future />} />
        <Route path='about' element={<About />} />
        <Route path='donation' element={<Donation />} />
        <Route path='techies' element={<Techies />} />
        <Route path='past' element={<Past />} />
        <Route path='categories' element={<Categories />} />
        <Route path='votes' element={<Votes />} />
        <Route path='power' element={<Power />} />
        <Route path='nominate' element={<Nominate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
