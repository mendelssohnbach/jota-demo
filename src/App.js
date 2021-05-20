import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  const [search, setSearch] = useState('');
  const handleChange = (event) => setSearch(event.target.value);

  return (
    <header>
      <input type="text" value={search} onChange={handleChange} />
    </header>
  );
}

function Main() {
  // How to access the search?
  return <main>Search query: ???</main>;
}
