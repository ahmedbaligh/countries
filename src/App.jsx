import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import axios from "axios";

export function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
