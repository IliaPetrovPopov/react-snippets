import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../views/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
