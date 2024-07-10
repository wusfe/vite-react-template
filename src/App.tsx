import { useState } from 'react';

import reactLogo from './assets/react.svg';
import { Button } from 'antd';

import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { routes } from './routes';

function App() {
  const [count, setCount] = useState(0);

  const createdRoutes =
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createHashRouter(routes)
      : createBrowserRouter(routes)
      
  return <RouterProvider router={createdRoutes} />
  
}

export default App;