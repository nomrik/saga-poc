import React from 'react';

const Home = ({count, animals, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync, onRequestAnimals}) => (
    <div>
      <h2>Home</h2>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrementAsync}>+ async</button>
      <hr />
      <button onClick={onRequestAnimals}>Get Animals</button>
      <hr />
      {animals.map(animal => (<img key={animal} src={animal} alt=''/>))}
    </div>
);

export default Home;