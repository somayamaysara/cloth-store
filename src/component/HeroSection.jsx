import React from 'react'
import heroImg from "../assets/image/hero_img-DOCOb6wn.png";
export default function HeroSection() {
return (
    <div className="container mb-5">
    <div className="hero_section row row-cols-lg-2 row-cols-md-1 g-0 align-items-center">
    <div className="text text-center">
        <p><svg width="70" height="20" viewBox="0 0 100 20">
<line x1="2" y1="10" x2="85" y2="10" stroke="black" strokeWidth="2" strokeLinecap="round" />
</svg>OUR BESTSELLER </p>
<h1 className="font ps-lg-5 ms-lg-5 pe-md-5">Latest Arrivals</h1>
<p className="fw-semibold pe-5">SHOP NOW<svg width="70" height="20" viewBox="0 0 100 20">
<line x1="2" y1="10" x2="85" y2="10" stroke="black" strokeWidth="2" strokeLinecap="round" />
</svg></p>
    </div>
    <div className="image-section">
        <img src={heroImg} alt="image-section" />
    </div>
</div>
</div>
)
}
