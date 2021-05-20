import { atom, useAtom } from 'jotai';

import './styles.css';

export const counterAtom = atom(0); // Global state

export default function CounterButton() {
  const [count, setCount] = useAtom(counterAtom);

  const handleClick = () => {
    setCount((number) => number + 1); // Increment number
  };

  return (
    <div>
      {count}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
