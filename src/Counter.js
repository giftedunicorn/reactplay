import cx from 'classnames';
import { useState } from 'react';

export default function Counter() {
    let [count, setCount] = useState(42)

    const handleOnClick = function() {
        setCount(count + 1)
    }

    return (
        <>
            <div>
                <h2 className="counter">{count}</h2>
                <button className="counter-button" onClick={handleOnClick}>Click</button>
            </div>
            <style>{`
                .counter-button {
                    font-size: 1rem;
                    padding: 5px 10px;
                    color:  #585858;
                }
                .counter {
                    font-size: 2rem;
                }
            `}</style>
        </>
    );
}
