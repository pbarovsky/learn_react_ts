import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductsPage } from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
