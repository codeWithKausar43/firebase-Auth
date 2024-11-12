import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Routes/MainLayout';
import MainPage from './components/Routes/MainPage';
import Home from './components/Home';
import Login from './components/Login';
import Resister from './Resister';
import Odars from './components/Odars';
import PrivateRoute from './components/PrivateRoute';
import Profile from './Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainPage></MainPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/resister",
        element:<Resister></Resister>
      },{
        path:"/order",
        element:<PrivateRoute><Odars></Odars></PrivateRoute>
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout>
   <RouterProvider router={router}></RouterProvider>
   </MainLayout>
  </StrictMode>,
)
