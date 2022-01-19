import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Layout from './Layout';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </nav>
		<Routes>
			<Route path="/" element={<Home />} />
		<Route path="Layout" element={<Layout />} />
		</Routes>
      </div>
    </Router>
  );
}
