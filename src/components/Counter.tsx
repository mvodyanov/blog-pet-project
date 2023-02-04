import { useState } from "react";
import Styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick} className={Styles.button}>click</button>
      <h1>{count}</h1>
    </div>
  );
};
