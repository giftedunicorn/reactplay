import { useState } from 'react'
import logo from './assets/logo.svg';
import Modal from './components/Modal.js';
import ScrollLoad from './components/ScrollLoad.js';
import './styles/App.css';

function App() {
  let [showModal, setShowModal] = useState(false)
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [isSignin, setIsSignin] = useState(true)

  const openModal = function() {
     setShowModal(true)
  }

  const closeModal = function() {
     setShowModal(false)
  }

  const emailOnChange = function(e) {
  setEmail(e.target.value)
  }

  const passwordOnChange = function(e) {
  setPassword(e.target.value)
  }

  const switchOnClick = function() {
    setIsSignin(!isSignin)
  }

  const signinOnClick = function() {
    let data = {
      email,
      password
    }
    console.log('signinOnClick', data)
    // signin(data)
    // .then(() => {})
    // .catch()
  }

  const signupOnClick = function() {
    let data = {
      email,
      password
    }
    console.log('signupOnClick', data)
    // signup(data)
    // .then(() => {})
    // .catch()
  }

  const renderModal = function() {
    return (
      <Modal 
        style={{
          // custom styles
        }} 
        modalClassName={''}
        containerClassName={''}
        show={showModal} 
        open={openModal} 
        close={closeModal}
      >
        <div>{isSignin ? '登录' : '注册'}</div>
        <input value={email} onChange={(e) => {
          emailOnChange(e)
        }} placeholder='邮箱'/>
        <input value={password} onChange={(e) => {
          passwordOnChange(e)
        }} placeholder='密码'/>
        <button onClick={() => {
          if (isSignin) signinOnClick()
          else signupOnClick()
        }}>提交</button>
        <button onClick={() => {
          switchOnClick()
        }}>{isSignin ? '现在注册' : '现在登录'}</button>
        <button onClick={() => {
          closeModal()
        }}>关闭</button>
      </Modal>
    )
  }

  const renderScroll = function() {
    return (
      <ScrollLoad>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ScrollLoad>
    )
  }

  const renderDemo = function() {
    return (
      <div>
        <p>I am snow</p>
        <p>I am snow</p>
        <p>I am snow</p>
      </div>
    )
  }

  return (
    <div className="App">
      <div style={{margin: 100}}>
        <button onClick={() => {
          openModal()
        }}>Open</button>
      </div>
      {renderDemo()}
      {renderScroll()}
      {renderModal()}
    </div>
  );
}

export default App;

// <Modal 
//   show={Boolean} 
//   className={""}
//   style={""} 
//   containerClassName={""}
//   containerClose={boolean}
//   escClose={boolean}
//  />

// dong hua transparent
