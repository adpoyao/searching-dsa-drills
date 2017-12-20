import React from 'react';

export default function Result(props) {
    return (
        <div className="result-container">
            <div className="results-box">
                <p>Result: {props.index}</p>
                <p>Counter: {props.counter}</p>
            </div>
        </div>
    )
}
