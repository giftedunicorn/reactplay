import { useState, useEffect, useRef } from 'react'
import './../styles/Dropdown.css';

function Dropdown(props) {
  let [open, setOpen] = useState(false)

  return (
  	<div>
	  <button onClick={() => {
	  	setOpen(!open)
	  }}>
	    Dropdown
	  </button>
	  <div className="overlay"></div>
    </div>
  );
}

export default Dropdown;
