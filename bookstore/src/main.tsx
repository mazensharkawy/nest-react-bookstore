import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import AddBookForm from './BookForm/Add.tsx'
import EditBookForm from './BookForm/Update.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<App />}/>
        <Route path="add-book" element={<AddBookForm />} />
        <Route path="update-book" element={<EditBookForm />} />
      </Route>
  )
);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
