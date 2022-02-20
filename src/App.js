import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import Center from './Center';
import DragDrop from './DragDrop';
import Autocomplete from './Autocomplete'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/layout">Layout</Link></li>
            <li><Link to="/center">Center</Link></li>
            <li><Link to="/dragdrop">DragDrop</Link></li>
            <li><Link to="/autocomplete">Autocomplete</Link></li>
          </ul>
        </nav>
    		<Routes>
    			<Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/center" element={<Center />} />
          <Route path="/dragdrop" element={<DragDrop />} />
          <Route path="/autocomplete" element={<Autocomplete />} />
    		</Routes>
      </div>
    </Router>
  );
}
