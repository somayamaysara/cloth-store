import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
export function Card({id, link, text, price}) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=10") 
        .then((res) => res.json())
        .then((resJson) => {
        setProduct(resJson.find((p) => p.id === id));
        })
        .catch((err) => {
        console.log(err);
        });
    }, []);
    return (
        <Link to={`/product/${id}`} className="card border-0 bg-transparent ">
            <div className="col">
            <div className="card border-0 rounded-0 h-100" style={{ cursor: 'pointer' }}>
            <div className="overflow-hidden bg-light p-3" style={{ height: '260px' }}>
            <img 
                className="card-img-top w-100 h-100" 
                src={product?.image} 
                alt={product?.title} 
                style={{ objectFit: 'contain', transition: 'transform 0.3s ease' }}
            />
            </div>
            <div className="card-body px-0 pt-3 pb-0">
                <p className="text-dark mb-1 text-truncate" style={{ fontSize: '13px' }}>{product?.title}</p>
                <p className="fw-bold text-dark mb-0" style={{ fontSize: '14px' }}>${product?.price}</p>
            </div>
            </div>
                </div>
    </Link>
    );
}