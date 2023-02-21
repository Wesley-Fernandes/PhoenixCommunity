import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {router} from './router'
import 'react-toastify/dist/ReactToastify.css';
import './main.scss'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer autoClose={3000} theme={"dark"}/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
