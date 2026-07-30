import React from 'react'
import Subscrip from './Subscrip'

export default function Contact() {
  return (
    <div className="container mb-5 pt-4 mt-4">
      <div className="collection text-center mb-5">
        <h3 className="text-uppercase fw-normal d-inline-flex align-items-center gap-2">
          <span className="text-secondary">Contact</span> <span className="fw-medium text-dark">Us</span>
          <svg width="60" height="2" className="ms-2">
            <line x1="0" y1="1" x2="60" y2="1" stroke="#333" strokeWidth="2" />
          </svg>
        </h3>
      </div>
      <div className="row align-items-center justify-content-center g-5">
        <div className="col-12 col-md-5">
          <div className="contactImage text-center">
            <img 
              src="src/assets/image/contact_img-CyOum2vk.png"
              alt="Contact Us" 
              className="img-fluid w-100" 
              style={{ width: '80%' }}
            />
          </div>
        </div>
        <div className="col-12 col-md-5 text-center text-md-start">
          <div className="contact-details text-secondary" style={{ fontSize: '15px' }}>
            <h6 className="fw-bold text-dark mb-3 fs-5">Our Store</h6>
            <p className="mb-0 text-black-50">54709 Willms Station</p>
            <p className="mb-4 text-black-50">Suite 350, Washington, USA</p>
            <p className="mb-0 text-black-50">Tel: (415) 555-0666</p>
            <p className="mb-4 text-black-50">Email: admin@forever.com</p>
            
            <h6 className="fw-bold text-dark mb-3 fs-5">Careers at Forever</h6>
            <p className="mb-4">Learn more about our teams and job openings.</p>
            <button 
              type="button" 
              className="btn btn-outline-dark rounded-0 px-4 py-2 text-uppercase fw-medium"
              style={{ fontSize: '14px', borderWidth: '1px' }}
            >
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <Subscrip/>
    </div>
  )
}
