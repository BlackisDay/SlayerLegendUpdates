import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';
import Signup from './pages/Signup.jsx';
import SignupPage from './pages/SignupPage.jsx';  
import LoginPage from './pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'SignupPage', element: <SignupPage /> },
      { path: 'Signup', element: <Signup /> },
      { path: 'Login', element: <LoginPage/>}
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)
