import { atom, useAtom } from 'jotai';
import Hoge from './Components/Hoge';

import './styles.css';

const nameAtom = atom('Batman');
const isNameEmptyAtom = atom((get) => get(nameAtom).length === 0);

export default function HeroName() {
  const [name, setName] = useAtom(nameAtom);
  const [isNameEmpty] = useAtom(isNameEmptyAtom);

  const handleChange = (event) => setName(event.target.value);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <div>Is name empty: {isNameEmpty ? 'Yes' : 'No'}</div>
      <Hoge />
    </div>
  );
}
