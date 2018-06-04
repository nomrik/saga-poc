/* React view for home */

import React from 'react';
import {statusOptions} from './ducks/constants';

const Home = ({animals, status, onRequestAnimals, onStopUpdate}) => {
  let isUpdating = status === statusOptions.updating;
  return (
    <div>
      <h2>Home</h2>
      <h3 style={{color: isUpdating ? 'green' : 'red'}}>{status}</h3>
      <button onClick={isUpdating ? onStopUpdate : onRequestAnimals}>
        {isUpdating ? 'Stop Update' : 'Start Update'}
      </button>
      <hr />
      {animals.map(animal => (<img width="200" height="200" key={animal} src={animal} alt=''/>))}
    </div>
)};

export default Home;