import React from "react";
import Drop from "./Drop";

export default () => {
    const [items, setItems] = React.useState([]);

    const itemDropped = item => setItems([...items, item]);
    return (
        <Drop onItemDropped={itemDropped} dropEffect="link">
            <div className="drag-drop-container">
                {items.map(item => (
                    <div key={item} className="item">
                        {item}
                    </div>
                ))}
            </div>
        </Drop>
    );
};
