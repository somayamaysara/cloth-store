import React from 'react'
import { Outlet } from 'react-router-dom' 
import Nav from './nav'
import Footer from './Footer'

export default function Layout() {
return (
    <div className="d-flex flex-column min-vh-100">
    <Nav />
    <main className="grow">
        <Outlet />
    </main> 
    <Footer />
    </div>
)
}