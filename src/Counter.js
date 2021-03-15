import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 };
        case "DECREMENT":
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    useEffect(() => {
        console.log("effect.");
        console.log(state.value);
        return () => {
            console.log("cleanup");
            console.log(state.value);
        };
    });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
            <button onClick={() => dispatch({ type: "stay" })}>0</button>
        </div>
    );
};

export default Counter;
