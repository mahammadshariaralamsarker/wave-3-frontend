import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Routes';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider';
import {Toaster} from "react-hot-toast"
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </AuthProvider> 
  </React.StrictMode>,
  </HelmetProvider>

)
