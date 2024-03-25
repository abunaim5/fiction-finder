import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root.jsx';
import Home from './pages/Home/Home.jsx';
import BookDetails from './pages/BookDetails/BookDetails.jsx';
import BooksCategory from './pages/BooksCategory/BooksCategory.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/details',
        element: <BookDetails></BookDetails>
      },
      {
        path: '/category',
        element: <BooksCategory></BooksCategory>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
