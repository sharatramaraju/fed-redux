import React from 'react';

const CounterDumbComponenet = (props) => 
<p>
    <button onClick={() => {
        console.log('update the store by subtracting 1');
        props.dispatchDecrementCounterAction();
    }}>Decrement</button>
    
    counter: {props.counter}

    <button onClick={() => {
        console.log('update the store by adding 1');
        props.dispatchIncrementCounterAction();
    }}>Increment</button>
</p>

export default CounterDumbComponenet;
