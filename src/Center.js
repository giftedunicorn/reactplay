import { useState } from 'react'
import './styles/Center.css';

function Center() {
  // learn how to center a item
  const renderCenterFlex = function() {
    return (
      <div className="container centerFlex">
        <div className="centerBoxFlex">
          <div>center flex</div>
        </div>
      </div>
    )
  }

  const renderCenterGrid = function() {
    return (
      <div className="container centerGrid">
        <div className="centerBoxGrid">
          <div>center grid</div>
        </div>
      </div>
    )
  }


  const renderCenterTransform = function() {
    return (
      <div className="container centerTransform">
        <div className="centerBoxTransform">
          <div>center transform</div>
        </div>
      </div>
    )
  }

  const renderCenterMargin = function() {
    return (
      <div className="container centerMargin">
        <div className="centerBoxMargin">
          <div>center margin</div>
        </div>
      </div>
    )
  }

  const renderCenterTable = function() {
    return (
      <div className="container">
        <div className="centertableOuter">
          <div className="centertableMiddle">
            <div className="centerBoxTable centertableInner">
              <div>center table</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderCenterInline = function() {
    return (
      <div className="container centerInline">
        <div className="centerBoxInline">
          <div>center inline</div>
        </div>
      </div>
    )
  }

  return (
    <div className="layout">
      {renderCenterFlex()}
      {renderCenterGrid()}
      {renderCenterTransform()}
      {renderCenterMargin()}
      {renderCenterTable()}
      {renderCenterInline()}
    </div>
  );
}

export default Center;
