import React from "react";
import PokemonMain from "../components/PokemonMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRouter () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<PokemonMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


