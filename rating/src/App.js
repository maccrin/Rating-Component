import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThankYou from './Components/ThankYou'
import ErrorPage from './Components/ErrorPage'
import Rating from "./Components/Rating"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Rating />} />
          <Route path="/thanks" element={<ThankYou />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
