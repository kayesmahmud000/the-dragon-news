import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    
  } from "react-router-dom";
import HomeLayout from '../Layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import NewsDetails from '../pages/NewsDetails';
import PrivatRoute from './PrivatRoute';

  const routes = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      children:[
        {
          path:"",
          element:<Navigate to={"/category/01"}></Navigate>
        },

        {
          path:"/category/:id",
          element:<CategoryNews></CategoryNews>,
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
    },
    {
        path:"/news/:id",
        element:<PrivatRoute><NewsDetails></NewsDetails></PrivatRoute>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
          {
            path:"/auth/login",
            element:<LoginPage></LoginPage>

          },
          {
            path:"/auth/register",
            element:<RegisterPage></RegisterPage>
          }
        ]
    },
    {
        path:"*",
        element:<h1>error</h1>
    }
  ]);

export default routes;