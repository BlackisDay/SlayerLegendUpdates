import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchBooks from './pages/SearchBooks'
import SavedBooks from './pages/SavedBooks'
import Forum from './components/Forum.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Error</h1>,
    children: [
      {
        index: true,
        element: <SearchBooks />
      }, {
        path: '/saved',
        element: <SavedBooks />
      },{
        path: '/forum',
        element: <Forum />
      },
      {
        path: "/profile",
        element: <h1>In Progress</h1>
      },
      {
        path: '*',
        element: <h1 className="display-2">Page Does Not Exist</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
