import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/body",
      element: <Body />
    }
  ]);

  return (
  
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
