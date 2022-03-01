import { useState, useEffect } from 'react'
import logo from './assets/logo.svg';
import Modal from './components/Modal.js';
import Dropdown from './components/Dropdown.js';
import Danmu from './components/Danmu.js';
import ScrollLoad from './components/ScrollLoad.js';
import './styles/App.css';

function App() {
  // react function最上层的代码，这里到useEffect，如果state更新的话每次都会被执行，print 123
  console.log(123)
  let [showModal, setShowModal] = useState(false)
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [isSignin, setIsSignin] = useState(true)

  useEffect(() => {
    console.log('useEffect1')
  }, [])
  useEffect(() => {
    console.log('useEffect2')
  })

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

  const targetOnClick = function(e) {
    let target = e.target
    let currentTarget = e.currentTarget
    console.log("target", target)  // li
    console.log("currentTarget", currentTarget)  // li
    console.log(target === currentTarget)  // true
  }

  // learn event current target vs target
  const renderCurrentTarget = function() {
    return (
      <div>
        测试currentTarget and target，两个会因为情况不同而指向不同的对象
        <ul onClick={(e) => targetOnClick(e)}>
          <li>hello 1</li>
          <li>hello 2</li>
          <li>hello 3</li>
          <li>hello 4</li>
        </ul>
      </div>
    )
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

  const renderDropdown = function() {
    const options = [
      "option 1",
      "option 2",
      "option 3",
      "option 4",
      "option 5",
    ]

    return (
      <div style={{margin: 100}}>
        <Dropdown options={options} position="right" />
      </div>
    )
  }

  const renderDanmu = function() {
    return (
      <Danmu />
    )
  }

  const renderDynamicImport = function() {
    return (
      <div style={{margin: 100}}>
        <button onClick={() => {
          import('./utils/print')
          .then((module) => {
            const print = module.default;
            print();
          })
          import("https://cdn.rawgit.com/lodash/lodash/4.17.4-es/lodash.default.js")
          .then(({ default: _ }) => {
            console.log(`lodash version ${_.VERSION} is loaded`)
            console.log('_.uniq([2, 1, 2]) :', _.uniq([2, 1, 2]));
          })
        }}>
          Dynamic Import
        </button>
      </div>
    )
  }

  const testStopPropagation = function(event, id) {
    // only print 1 and will stop bubbling phase
    event.stopPropagation()
    alert(id)
  }

  const testPreventDefault = function(event) {
    // will prevent <a> redirect action
    event.preventDefault()
  }

  const renderHtmlFunctions = function() {
    return (
      <div>
        <a href="http://www.baidu.com" onClick={(event) => testPreventDefault(event)}>test preventDefault</a>
        <div onClick={(event) => testStopPropagation(event, 4)}>
          <div onClick={(event) => testStopPropagation(event, 3)}>
            <div onClick={(event) => testStopPropagation(event, 2)}>
              <div onClick={(event) => testStopPropagation(event, 1)}>
                test stopPropagation
              </div>
            </div>
          </div>
        </div>
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
      {renderHtmlFunctions()}
      {renderDemo()}
      {renderDropdown()}
      {{/*renderDynamicImport*/}()}
      {renderCurrentTarget()}
      {renderDanmu()}
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
