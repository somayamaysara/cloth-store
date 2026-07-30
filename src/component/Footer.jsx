import React from 'react'
export default function Footer() {
return (
    <div className="pt-5 px-3 px-md-5 mt-auto w-100">
    <div className="container-fluid">
        <div className="row g-4 justify-content-between text-start">
        <div className="col-12 col-md-4 pe-2">
            <div className="d-flex align-items-center gap-2">
            <img src="src/assets/image/Untitled.png" alt="logo med" className="img-fluid" style={{ height: '40px', width: '100px', objectFit: 'contain' }}/>
            </div>
            <p className="small mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur alias eaque quibusdam ipsum fuga soluta excepturi corporis doloremque animi architecto, repudiandae sit perspiciatis saepe necessitatibus aut natus nisi autem?
            </p>
        </div>
        <div className="col-12 col-md-4 ps-5">
        <p className="text-xl font-medium ">COMPANY</p>
        <ul className="list-unstyled d-flex flex-column gap-2 small">
            <li>
            Home
            </li>
            <li>
            About us
            </li>
            <li>
            Delivery
            </li>
            <li>
            Privacy policy
            </li>
        </ul>
        </div><div className="col-12 col-md-4">
            <p className="text-xl font-medium ">GET IN TOUCH</p>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
            <li>
            +84-111-222-333
            </li>
            <li>
            contact@gmail.com
            </li>
            </ul>
        </div>
        </div>
        <hr className="mt-3" />
        <div className="row py-3">
        <div className="col text-center">
            <p className="small mb-0">
            copyright © {new Date().getFullYear()} All Rights Reserved.
            </p>
        </div>
        </div>
    </div>
    </div>
);
}