import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import Card2 from "./component/card2";
export const url = "https://www.themoviedb.org/t/p/w220_and_h330_face";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Card2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
