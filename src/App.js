import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../src/app/pages/index.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Index />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
