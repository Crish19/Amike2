import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BookingPage from './pages/BookingPage.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/booking" element={<BookingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
