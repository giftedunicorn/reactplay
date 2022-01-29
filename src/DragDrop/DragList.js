import React from "react";
import Drag from "./Drag";
import logo from "./logo.png";

const items = [logo,logo,logo,logo];

export default () => {
    return (
        <div className="drag-drop-container">
            {items.map((item, index) => (
                <Drag key={index} dataItem={item} dragImage={logo} dropEffect="link">
                    <div className="item"><img src={item} /></div>
                </Drag>
            ))}
        </div>
    );
};
