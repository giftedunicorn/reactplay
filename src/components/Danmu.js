import { useState, useEffect, useRef } from 'react'
import './../styles/Danmu.css';

function Danmu(props) {
  const containerRef = useRef(null);
  let [left, setLeft] = useState(500)
  let danmuDynamic = {
	left: left,
	transition: "all 0.2s linear",
  }

  useEffect(() => {
	let timer = setInterval(() => {
		if (left > -100) setLeft(left-10)
	}, 100);
	return () => clearInterval(timer);
  }, [left])

  return (
  	<div className="danmuContainer" ref={containerRef}>
	  <div className="danmuItem" style={danmuDynamic}>好棒的弹幕！</div>
    </div>
  );
}

export default Danmu;
