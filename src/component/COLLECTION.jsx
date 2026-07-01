import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function COLLECTION() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20") 
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson); 
        setFilteredData(resJson); 
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
        setShow(false);
      });
  }, []);
  useEffect(() => {
    let result = data;
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    setFilteredData(result);
  }, [selectedCategories, selectedTypes, data]);
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <div className="container py-5">
      {show ? (
        <div className="text-center py-5">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-12 col-md-3 text-start">
            <h5 className="text-uppercase fw-normal mb-4" style={{ fontSize: '18px', letterSpacing: '1px' }}>Filters</h5>
            <div className="border p-3 mb-4">
              <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: '12px' }}>Categories</h6>
              <div className="d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
                <label className="d-flex align-items-center gap-2 style={{ cursor: 'pointer' }}">
                  <input type="checkbox" onChange={() => handleCategoryChange("men's clothing")} /> Men
                </label>
                <label className="d-flex align-items-center gap-2 style={{ cursor: 'pointer' }}">
                  <input type="checkbox" onChange={() => handleCategoryChange("women's clothing")} /> Women
                </label>
                <label className="d-flex align-items-center gap-2 style={{ cursor: 'pointer' }}">
                  <input type="checkbox" onChange={() => handleCategoryChange("jewelery")} /> Kids
                </label>
              </div>
            </div>
            <div className="border p-3">
              <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: '12px' }}>Type</h6>
              <div className="d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
                <label className="d-flex align-items-center gap-2">
                  <input type="checkbox" /> Topwear
                </label>
                <label className="d-flex align-items-center gap-2">
                  <input type="checkbox" /> Bottomwear
                </label>
                <label className="d-flex align-items-center gap-2">
                  <input type="checkbox" /> Winterwear
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="text-uppercase fw-normal d-inline-flex align-items-center gap-2 m-0" style={{ fontSize: '20px' }}>
                <span className="text-secondary">All</span> <span className="fw-medium text-dark">Collections</span>
                <svg width="40" height="2" className="ms-1">
                  <line x1="0" y1="1" x2="40" y2="1" stroke="#333" strokeWidth="2" />
                </svg>
              </h4>
              <select className="form-select border rounded-0" style={{ width: '170px', fontSize: '14px' }}>
                <option>Sort by: Relevant</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 text-start">
  {filteredData.map((product) => (
    <div className="col" key={product.id}>
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <div className="card border-0 rounded-0 h-100" style={{ cursor: 'pointer' }}>
          <div className="overflow-hidden bg-light p-3" style={{ height: '260px' }}>
            <img 
              className="card-img-top w-100 h-100" 
              src={product.image} 
              alt={product.title} 
              style={{ objectFit: 'contain', transition: 'transform 0.3s ease' }}
            />
          </div>
          <div className="card-body px-0 pt-3 pb-0">
            <p className="text-dark mb-1 text-truncate" style={{ fontSize: '13px' }}>{product.title}</p>
            <p className="fw-bold text-dark mb-0" style={{ fontSize: '14px' }}>${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>
          </div>
        </div>
      )} 
    </div>
  );
}