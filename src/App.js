import { atom, useAtom } from 'jotai';

import './styles.css';

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

// ユーザ入力のグローバル状態を保持
const searchAtom = atom(''); // Global state

function Header() {
  // ユーザ入力値とその更新関数を返す
  const [search, setSearch] = useAtom(searchAtom);
  // イベントハンドラはユーザ入力値を逐一監視si
  // 更新関数 `setSearch` を更新する
  const handleChange = (event) => setSearch(event.target.value);

  // イベントハンドラを `<header>` タグに組み込んで返す
  return (
    <header>
      <input
        autoFocus
        type="text"
        value={search}
        onChange={handleChange} // イベントハンドラ
        placeholder="Type search query"
      />
    </header>
  );
}

function Main() {
  // ユーザ入力値のみ返す
  const [search] = useAtom(searchAtom);

  // 入力された値を`<main>` タグに組み込んで返す
  return <main>Search query: "{search}"</main>;
}
