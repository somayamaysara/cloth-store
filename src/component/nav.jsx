import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
return (
    <>
<div className="container">
    <nav className="navbar navbar-expand-lg border-bottom"> 
<div className="container-fluid">
    <img src="src/assets/image/Untitled.png" alt="img" class="w-36"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/COLLECTION">COLLECTION</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/About">ABOUT</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Contact">CONTACT</Link>
        </li>
    </ul>
<span className="navbar-text me-4">
        <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="navbar-text me-4">
            <Link to="/signup" className="navbar-text text-dark text-decoration-none">
                <i className="fa-regular fa-user"></i>
                </Link>
        </span>
        <span className="navbar-text">
            <Link to="/Card" >
            <span>
<svg width="35" height="35" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.625 7.85413H20.5417L19.6019 20.5416H4.56481L3.625 7.85413Z" stroke="black" strokeLinejoin="round"/>
<path d="M8.32422 9.7338V3.625H15.8427V9.7338" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.32422 16.7823H15.8427" stroke="black" strokeLinecap="round"/>
<circle cx="21" cy="21" r="6" fill="black"/>
</svg>
</span>
</Link>
    </span>
    </div>
</div>
</nav>
</div>
</>
)
}
