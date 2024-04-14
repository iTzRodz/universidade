import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Contact from './pages/Contact.jsx';
import ErrorPage from './pages/error/error-page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage/>
  },
  {
    path: "/teste",
    Component: Contact
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
