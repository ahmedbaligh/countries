import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Container } from "@chakra-ui/react";

export function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />\
      </Routes>
    </Container>
  );
}
