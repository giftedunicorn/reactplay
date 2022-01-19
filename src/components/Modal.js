import { useState, useEffect, useRef } from 'react'
import './../styles/Modal.css';

function Modal(props) {
  const modalRef = useRef(null);
  let keydownCloseEvent = null

  useEffect(() => {
    document.addEventListener('keydown', escKeyListener)
    // document.addEventListener('mousedown', outboundOnClickListener)

    return () => {
      document.removeEventListener('keydown', escKeyListener)
      // document.removeEventListener('mousedown', outboundOnClickListener)
    }
  }, [])

  const escKeyListener = function(e) {
    if (e.keyCode === 27) {
      props.close()
    }
  }

  // we can add the close function to the backdrop instead of a event listener
  // const outboundOnClickListener = function(e) {
  //   if (modalRef.current && !modalRef.current.contains(e.target)) {
  //     props.close()
  //   }
  // }

  // 如果使用 transition，就不能使用 conditional rendering
  // 而且 transition and display hide 也有很多问题，如果不用display hide，需要把modal藏起来
  // 使用 animation，可以使用 conditional rendering
  
  // https://yamagata-developers-society.github.io/blog/react-hooks-slide-in-modal/
  // https://medium.com/@lucksp_22012/pure-react-modal-6e562a317b85
  // https://dev.to/oussel/how-to-use-conditional-rendering-with-animation-in-react-1k20
  if (!props.show) return null
  return (
  	<div className={`modal-container ${props.containerClassName}`} id="modal-container">
	    <div className={`modal ${props.show ? "modal-animation-open" : "modal-animation-close" } ${props.modalClassName}`} ref={modalRef} id="modal">
	    	{props.children}
	    </div>
      <div className={`modal-overlay`} onClick={() => props.close()}></div>
    </div>
  );
}

export default Modal;
