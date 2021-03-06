import { useState } from 'react'
import './styles/Layout.css';

function Layout() {
  // learn css position
  const renderPosition = function() {
    return (
      <div id="relative" className="positionContainer">
        <div className="sticky">stikcy head</div>
        <h2 className="absolute">这是一个absolute的标题</h2>
        <h2 className="fixed">这是一个fixed的标题</h2>
        <p>用relative, 相对于自己的位置来移动，比如 left -20，意思就是往自己左边移动20。一般用来作为absolute的容器。</p>
        <p>用absolute,一个元素可以放在页面上的任何位置，相对于父级relative元素，如果没有则html元素。</p>
        <p>fixed,一个元素可以放在视窗上的任何位置，跟着浏览器走的，而abs是跟着relative元素走的。</p>
        <p>sticky,relative和fixed的混合使用。</p>
      </div>
    )
  }

  // learn how to make a left center right layout
  const renderLeftRight = function() {
    return (
      <div className="container leftRightContainer">
        <div className="leftItem">left</div>
        <div className="centerItem">center</div>
        <div className="rightItem">right</div>
      </div>
    )
  }

  // learn how to make head body foot layout
  const renderHeadFoot = function() {
    const items = Array(100).fill(0).map((item, index) => <div key={`${index}-body`}>{index} body</div>)
    const text = "body"

    return (
      <div className="container headFootcontainer">
        <div className="headItem">head</div>
        <div className="bodyItem">{text}</div>
        <div className="footItem">foot</div>
      </div>
    )
  } 

  return (
    <div className="layout">
      {renderPosition()}
      {renderLeftRight()}
      {renderHeadFoot()}
    </div>
  );
}

export default Layout;
