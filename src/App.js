import { atom, useAtom } from 'jotai';

import './styles.css';

export const counterAtom = atom(0); // Global state

export default function App() {
  return (
    <>
      <CounterButton />
      <CurrentCount />
    </>
  );
}

export function CounterButton() {
  const [count, setCount] = useAtom(counterAtom);

  const handleClick = () => {
    setCount((number) => number + 1);
  };

  return (
    <div>
      {count}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

function CurrentCount() {
  const [count] = useAtom(counterAtom);

  return <div>Current count: {count}</div>;
}
