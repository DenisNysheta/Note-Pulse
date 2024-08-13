import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from './assets/scripts/store.js';
import './normalize.css'
import "./assets/styles/components/App.scss"
import { Provider } from "react-redux"
import Welcome from './pages/Welcome.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
