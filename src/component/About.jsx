import React from 'react'
import Subscrip from './Subscrip'

export default function About() {
  return (
    <div className="container mb-5 pt-4 mt-4">
      <div className="collection  mb-5">
        <h3 className="text-uppercase fw-normal align-items-center gap-2 text-center">
          <span className="text-secondary text-center">About</span> <span className="fw-medium text-dark">Us</span>
          <svg width="60" height="2" className="ms-2">
            <line x1="0" y1="1" x2="60" y2="1" stroke="#333" strokeWidth="2" />
          </svg>
        </h3>
      </div>
      <div className="row align-items-center g-5 mb-5 pb-4">
        <div className="col-12 col-md-5">
          <div className="aboutImage">
            <img 
              src="src/assets/image/about_img-BAJyTXw9.png" 
              alt="About Us" 
              className="img-fluid w-100" 
            />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="paragraph lh-lg text-secondary" style={{ fontSize: '15px' }}>
            <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <p className="my-4">Since our inception, we have worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            
            <h5 className="text-black fw-bold my-3" style={{ fontSize: '16px' }}>Our Mission</h5>
            <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We are dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-4">
        <div className="collection text-start mb-4">
          <h3 className="text-uppercase fw-normal d-flex align-items-center gap-2" style={{ fontSize: '28px' }}>
            <span className="text-secondary">Why</span> <span className="fw-medium text-dark">Choose Us</span>
            <svg width="60" height="2" className="ms-2">
              <line x1="0" y1="1" x2="60" y2="1" stroke="#333" strokeWidth="2" />
            </svg>
          </h3>
        </div>
        <div className="row g-0 border text-start">
          <div className="col-12 col-md-4 p-5 border-end">
            <h6 className="fw-bold text-black mb-3" style={{ fontSize: '16px' }}>Quality Assurance:</h6>
            <p className="text-secondary mb-0 lh-base" style={{ fontSize: '15px' }}>
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 border-end">
            <h6 className="fw-bold text-black mb-3" style={{ fontSize: '16px' }}>Convenience:</h6>
            <p className="text-secondary mb-0 lh-base" style={{ fontSize: '15px' }}>
              With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>
          <div className="col-12 col-md-4 p-5">
            <h6 className="fw-bold text-black mb-3" style={{ fontSize: '16px' }}>Exceptional Customer Service:</h6>
            <p className="text-secondary mb-0 lh-base" style={{ fontSize: '15px' }}>
              Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      <Subscrip/>
    </div>
  )
}