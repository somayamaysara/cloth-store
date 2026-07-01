import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Card} from './card'
import Nav from './component/nav'
import Home from './component/Home'
import COLLECTION from './component/COLLECTION'
import About from './component/About'
import Contact from './component/Contact'
import Layout from './component/Layout'
import HeroSection from './component/HeroSection'
import Best_saller from './component/best_saller'
import Larg_card from './component/larg_card'
import Footer from './component/Footer'
import Profile from './component/profile'
import Login from './component/Login'
import ProductDetail from './component/Addprodect'
// import CartPage from './component/CartPage'
const router =createBrowserRouter([
  {
    path :"/",
    element : <Layout/>,
    children:[{
    path :"/",
    element : <Home/>,
    },
    {
    path :"/COLLECTION",
    element : <COLLECTION/>,
    },
    {
    path :"/About",
    element : <About/>,
    },
    {
    path :"/Contact",
    element : <Contact/>,
    },
    {
    path :"/signup",
    element : <Profile/>,
    },
    {
    path :"/product/:id",
    element : <ProductDetail />,
    },
    {
  path: "/login",
  element: <Login />,
    },
  ]
  }
])
function App() {
  return (
    <>
<RouterProvider router={router} />
    </>
  )
}
export default App;
