import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Analytics from './Pages/AnalyticsPage';
import AboutUs from './Pages/AboutUs';

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Analytics",
    element: <Analytics/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);
