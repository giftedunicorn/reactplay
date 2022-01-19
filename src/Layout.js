import { useState } from 'react'
import './styles/Layout.css';

function Layout() {
  const renderCenter = function() {
    return (
      <div>
      </div>
    )
  }

  const renderPosition = function() {
    return (
      <div className="positionContainer">
        <div class="sticky">stikcy head</div>
        <h2 class="abs">这是一个absolute的标题</h2>
        <h2 class="fixed">这是一个fixed的标题</h2>
        <p>用relative, 相对于自己的位置来移动，比如 left -20，意思就是往自己左边移动20。一般用来作为absolute的容器。</p>
        <p>用absolute,一个元素可以放在页面上的任何位置，相对于父级relative元素，如果没有则html元素。</p>
        <p>fixed,一个元素可以放在视窗上的任何位置，跟着浏览器走的，而abs是跟着relative元素走的。</p>
        <p>sticky,relative和fixed的混合使用。</p>
      </div>
    )
  }

  const renderLeftRight = function() {
    return (
      <div>
      </div>
    )
  }

  const renderHeadFoot = function() {
    return (
      <div>
        <div className="head">head</div>
        <div className="body">body</div>
        <div className="foot">foot</div>
      </div>
    )
  } 

  return (
    <div className="layout">
      {renderPosition()}
      {renderCenter()}
      {renderHeadFoot()}
      {renderLeftRight()}
    </div>
  );
}

export default Layout;
