import React from 'react'

export default function Nav() {
return (
    <>
<div className="container">
    <nav className="navbar navbar-expand-lg  ">
<div className="container-fluid">
    <img src="src/assets/image/Untitled.png" alt="img" class="w-36"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">COLLECTION</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">CONTACT</a>
        </li>
    </ul>
    <span className="navbar-text me-4">
        <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="navbar-text me-4">
        <i className="fa-regular fa-user"></i>
        </span>
        <span className="navbar-text">
<svg width="35" height="35" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.625 7.85413H20.5417L19.6019 20.5416H4.56481L3.625 7.85413Z" stroke="black" strokeLinejoin="round"/>
<path d="M8.32422 9.7338V3.625H15.8427V9.7338" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.32422 16.7823H15.8427" stroke="black" strokeLinecap="round"/>
<circle cx="21" cy="21" r="6" fill="black"/>
</svg>
    </span>
    </div>
</div>
</nav>
</div>
</>
)
}
