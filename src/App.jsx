import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components/Header';
import { Home } from './pages/Home';

export function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const result = await axios.get('https://restcountries.com/v3.1/all');

      setCountries(result.data);
    }

    getCountries();
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
