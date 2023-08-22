import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import WelcomePage from './Pages/WelcomePage/WelcomePage';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<WelcomePage />

      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();