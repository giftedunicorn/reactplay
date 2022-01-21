import { useState } from 'react'
import './styles/Center.css';

function Center() {
  // learn how to center a item
  const renderCenter = function() {
    return (
      <div className="container center">
        <div className="centerBox">
          <div>center</div>
        </div>
      </div>
    )
  }

  return (
    <div className="layout">
      {renderCenter()}
    </div>
  );
}

export default Center;
