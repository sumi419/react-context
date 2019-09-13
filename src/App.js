import React, { useState } from 'react';

import useInterval from './static/lib/useInterval';
import { CountContext } from './contexts/CountContext';
import Counter from './components/Counter';

import './static/css/App.css';

export default function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return (
    <div className='App'>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
