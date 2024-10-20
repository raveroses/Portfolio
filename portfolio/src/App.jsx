import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Header from "./Component/Header";
import Author from "./pages/Author";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="author" element={<Author />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
