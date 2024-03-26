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
import PageToRead from './pages/PageToRead/PageToRead.jsx';
import Error from './components/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/category',
        element: <BooksCategory></BooksCategory>
      },
      {
        path: '/page-read',
        element: <PageToRead></PageToRead>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
