import React, { useContext } from 'react';

import { CountContext } from '../contexts/CountContext';

export default function Counter() {
  const count = useContext(CountContext);

  return <div>{count}</div>;
}
