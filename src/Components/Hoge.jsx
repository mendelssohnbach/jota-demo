import { useAtom } from 'jotai';
import { countAtom } from './Atoms';
import './hoge.css';

const Hoge = () => {
  // このコンポーネントでは countAtom を利用する
  // 合わせてセッターも返される
  const [count, setCount] = useAtom(countAtom);

  const handlePlus = () => setCount((value) => value + 1);
  const handleMinus = () => setCount((value) => value - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button className="button" onClick={handlePlus}>
          one up
        </button>
        <button className="button" onClick={handleMinus}>
          one down
        </button>
      </div>
    </div>
  );
};

export default Hoge;
