import router from '@src/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';


const rootElement = document.getElementById('root');
if (!rootElement)
  throw new Error("failed to get root element");


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
