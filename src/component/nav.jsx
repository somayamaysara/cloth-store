import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../component/CartContext'
export default function Nav() {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg border-bottom">
                    <div className="container-fluid">
                        <img src="src/assets/image/Untitled.png" alt="img" className="w-36" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `nav-link pb-1 ${isActive ? 'text-black fw-bold border-bottom border-2 border-dark' : 'text-secondary fw-medium'}`
                                        }
                                    >
                                        HOME
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        to="/COLLECTION"
                                        className={({ isActive }) =>
                                            `nav-link pb-1 ${isActive ? 'text-black fw-bold border-bottom border-2 border-dark' : 'text-secondary fw-medium'}`
                                        }
                                    >
                                        COLLECTION
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        to="/About"
                                        className={({ isActive }) =>
                                            `nav-link pb-1 ${isActive ? 'text-black fw-bold border-bottom border-2 border-dark' : 'text-secondary fw-medium'}`
                                        }
                                    >
                                        ABOUT
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        to="/Contact"
                                        className={({ isActive }) =>
                                            `nav-link pb-1 ${isActive ? 'text-black fw-bold border-bottom border-2 border-dark' : 'text-secondary fw-medium'}`
                                        }
                                    >
                                        CONTACT
                                    </NavLink>
                                </li>
                            </ul>
                            <span className="navbar-text me-4 nav-style ">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <span className="navbar-text me-4">
                                <Link to="/signup" className="navbar-text text-dark text-decoration-none">
                                    <i className="fa-regular fa-user"></i>
                                </Link>
                            </span>
                            <span className="navbar-text">
                                <Link to="/Card" className="text-decoration-none position-relative d-inline-block">
                                    <svg width="28" height="28" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.625 7.85413H20.5417L19.6019 20.5416H4.56481L3.625 7.85413Z" stroke="black" strokeWidth="1.8" strokeLinejoin="round" />
                                        <path d="M8.32422 9.7338V3.625H15.8427V9.7338" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.32422 16.7823H15.8427" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                    <span
                                        className="position-absolute bg-black text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                        style={{
                                            bottom: '-2px',
                                            right: '-6px',
                                            width: '16px',
                                            height: '16px',
                                            fontSize: '9px',
                                            lineHeight: '1'
                                        }}
                                    >
                                        {totalItems}
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
