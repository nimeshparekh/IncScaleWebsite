import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="#" element={<About />} />
          <Route exact path="#" element={<Services />} />
          <Route exact path="#" element={<Contact />} />
          <Route exact path="#" element={<Portfolio />} />
          {/* <Route exact path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

// <Route path="/" element={<Home />}>
//         {/* <Route index element={<Home />} /> */}
//         <Route exact path="/about" render={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         {/* <Route path="/about" element={<About />} /> */}
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NoPage />} />
//       </Route>
