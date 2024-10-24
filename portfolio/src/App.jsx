import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Header from "./Component/Header";
import Author from "./pages/Author";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
