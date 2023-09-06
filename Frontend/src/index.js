import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Game from "./Pages/Game/Game";
import SummaryTable from "./Pages/SummaryTable/SummaryTable";



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Game />

      },
      {
        path:"/summaryTable",
        element:<SummaryTable />
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
