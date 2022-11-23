import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Quiz from "./Quiz";
class Home extends Component {
  render() {
    return (
      <Router>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/HomePage" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Quiz" className="nav-link">
              Quiz
            </Link>
          </li>
        </ul>
        <Routes>
          <Route index path="/HomePage" element={<HomePage />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </Router>
    );
  }
}
export default Home;
