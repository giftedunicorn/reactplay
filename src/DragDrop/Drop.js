import React from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./dropEffects";

const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};

const Drop = props => {
    const [isOver, setIsOver] = React.useState(false);

    const dragOver = ev => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
    };

    const drop = ev => {
        ev.preventDefault();
        // drag item from drag area
        const droppedItem = ev.dataTransfer.getData("drag-item");
        if (droppedItem) {
            props.onItemDropped(droppedItem);
        } else {
            // drag item from outside of browser
            let file = ev.dataTransfer.files[0]
            let reader = new FileReader();
            reader.onload = function (event) {
                if (event.target.result) {
                    props.onItemDropped(event.target.result);
                }
            }
            reader.readAsDataURL(file);
        }
        setIsOver(false);
    };

    const dragEnter = ev => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
        setIsOver(true);
    };

    const dragLeave = () => setIsOver(false);

    return (
        <div
            onDragOver={dragOver}
            onDrop={drop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            style={{ width: "100%", height: "100%", ...(isOver ? insideStyle : {}) }}
        >
            {props.children}
        </div>
    );
};

Drop.propTypes = {
    onItemDropped: PropTypes.func.isRequired,
    dropEffect: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Drop.defaultProps = {
    dropEffect: dropEffects.All,
};

export default Drop;
