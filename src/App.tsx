import { useState } from 'react';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-content-center h-screen text-center text-lg">
      <div className="flex mx-auto items-center gap-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="w-28" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-32 animate-spin [animation-duration:10s]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="my-20 font-semibold text-6xl">Vite + React</h1>
      
      <p className="opacity-40">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;