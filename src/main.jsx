import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import GlobalAuth from './AuthProvider/GlobalAuth.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalAuth>
      <RouterProvider router={router} />
    </GlobalAuth>
  </React.StrictMode>,
)
