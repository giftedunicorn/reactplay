import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import './../styles/Dropdown.css';

function Dropdown(props) {
  let [open, setOpen] = useState(false)
  let [selected, setSelected] = useState("")
  let ref = useRef(null)

  const onClose = function() {
  	setOpen(false)
  }

  const onSelect = function(e) {
  	if (e.target.dataset.value) {
		setSelected(e.target.dataset.value)
		setOpen(false);
  	}
  }

  const renderMenu = function() {
  	if (!open || !props.options) return null
	console.log(ref.current.getBoundingClientRect())
	const { top, left, right, bottom, width, height} = ref.current.getBoundingClientRect()

	// 1. use transofrm to move popup
	// 2. calculate top and left to move popup
	let styles = { left, top }
	if (props.position === 'top') {
		styles.transform = `translate(0%, -100%)`
	} else if (props.position === 'left') {
		styles.transform = `translate(-100%, -50%)`
	} else if (props.position === 'right') {
		styles.transform = `translate(100%, -50%)`
	} else {
		styles.transform = `translate(0%, 25%)`
	}

	return ReactDOM.createPortal(
		<div className="menuContainer menuBox" style={styles} onClick={(e) => onSelect(e)}>
	  		{props.options.map((option, index) => {
	  			return (
	  				<div key={option} data-value={option}>{option}</div>
				)
	  		})}
  		</div>,
		document.body
	);
  }

  return (
  	<div className="dropdown">
	  <button ref={ref} onClick={() => {
	  	setOpen(!open)
	  }}>
	    {selected || `Dropdown`}
	  </button>
	  {renderMenu()}
	  {open && <div className="overlay" onClick={() => onClose()}></div>}
    </div>
  );
}

export default Dropdown;
