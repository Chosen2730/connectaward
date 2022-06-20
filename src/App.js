import "./App.css";
import { useGlobalContext } from "./context";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import { useEffect } from "react";
import Footer from "./components/footer";
import Future from "./pages/future";
import About from "./pages/about";
import Donation from "./pages/donation";
import Techies from "./pages/techies";
import Past from "./pages/past";
import Categories from "./pages/categories";
import Votes from "./pages/vote";

function App() {
  const {} = useGlobalContext();

  // useEffect(() => {
  //   const scroll = window.scrollY;
  //   if (scroll > 0) {
  //     window.scrollTo({
  //       top: 0,
  //     });
  //   }
  // }, [Routes]);
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
        <Route path='categories' element={<Categories />} />
        <Route path='votes' element={<Votes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
