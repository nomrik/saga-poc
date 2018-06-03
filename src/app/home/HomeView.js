import React from 'react';

const Home = ({count, onIncrement, onDecrement}) => (
    <div>
      <h2>Home</h2>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
);

export default Home;