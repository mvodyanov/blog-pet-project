import { useState } from "react";
import './Counter.scss'


export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <h1>{count}</h1>
    </div>
  );
};
