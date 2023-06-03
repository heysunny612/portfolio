import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import App from './App';
import About from './pages/About';
import Blog from './pages/Blog';
import Work from './pages/Work';
import Switter from './pages/Switter';
import { ThemeContextProvider } from './context/ThemeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/work', element: <Work /> },
      { path: '/blog', element: <Blog /> },
      { path: '/switter', element: <Switter /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
