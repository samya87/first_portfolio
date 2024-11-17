
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Connect from './components/Connect/Connect';
import Journey from './components/Journey/Journey';
import Skills from './components/Skills/Skills';
import Demo from './components/Demo/Demo';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/connect',
        element: <Connect></Connect>
      },
      {
        path: '/journey',
        element: <Journey></Journey>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      },
      {
        path: '/demo',
        element: <Demo></Demo>
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
