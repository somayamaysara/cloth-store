import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../component/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState('');

  const sizes = ['M', 'L', 'XL', 'XXL'];

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((resJson) => {
        setProduct(resJson);
        setMainImage(resJson.image);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleImageChange = (e) => {
    setMainImage(e.target.src);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    addToCart({
      id: product?.id,
      title: product?.title || "Men Round Neck Pure Cotton T-shirt",
      price: product?.price || 19,
      image: mainImage, 
      size: selectedSize
    });

    navigate('/card');
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="row g-2">
            <div className="col-2 d-flex flex-column gap-2">
              <img 
                alt="thumb" 
                src={product?.image} 
                className="img-fluid border p-1" 
                style={{ cursor: 'pointer', height: '65px', objectFit: 'contain' }}
                onClick={handleImageChange} 
              />
              <img 
                alt="thumb" 
                src="/src/assets/image/p_img2_1-ku4Fyxmj.png" 
                className="img-fluid border p-1" 
                style={{ cursor: 'pointer', height: '65px', objectFit: 'contain' }}
                onClick={handleImageChange} 
              />
              <img 
                alt="thumb" 
                src="/src/assets/image/p_img3-Bhmp8mac.png" 
                className="img-fluid border p-1" 
                style={{ cursor: 'pointer', height: '65px', objectFit: 'contain' }}
                onClick={handleImageChange} 
              />
              <img 
                alt="thumb" 
                src="/src/assets/image/p_img4-CYIvCkUm.png" 
                className="img-fluid border p-1" 
                style={{ cursor: 'pointer', height: '65px', objectFit: 'contain' }}
                onClick={handleImageChange} 
              />
            </div>
            <div className="col-10 text-center bg-light p-3 border" style={{ height: '420px' }}>
              <img 
                alt="main" 
                src={mainImage} 
                className="w-100 h-100" 
                style={{ objectFit: 'contain' }} 
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 text-start ps-md-4">
          <h2 className="fw-medium text-dark mb-2" style={{ fontSize: '28px' }}>
            {product?.title || "Men Round Neck Pure Cotton T-shirt"}
          </h2>
          <div className="d-flex align-items-center gap-1 mb-4 text-warning" style={{ fontSize: '18px' }}>
            <span>★</span><span>★</span><span>★</span><span>★</span>
            <span className="text-secondary opacity-25">★</span>
            <span className="text-dark ms-2" style={{ fontSize: '14px' }}>({product?.rating?.count || 132})</span>
          </div>
          <h3 className="fw-bold text-dark mb-4" style={{ fontSize: '24px' }}>
            {product?.price ? `${product.price}SR` : "19SR"}
          </h3>
          <p className="text-secondary mb-4 lh-base" style={{ fontSize: '14px', maxWidth: '550px' }}>
            {product?.description || "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment."}
          </p>
          <div className="mb-4">
            <p className="text-dark mb-3" style={{ fontSize: '15px' }}>Select Size</p>
            <div className="d-flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`btn rounded-0 border px-3 py-2 ${
                    selectedSize === size ? 'bg-secondary text-white border-secondary' : 'bg-light text-dark'
                  }`}
                  style={{ minWidth: '45px', fontSize: '14px' }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="button"
            onClick={handleAddToCart}
            className="btn btn-dark text-uppercase rounded-0 fw-medium px-4 py-2 mb-4" 
            style={{ fontSize: '13px', letterSpacing: '1px' }}
          >
            ADD TO CART
          </button>

          <hr className="my-4 text-secondary opacity-25" />
          <div className="text-secondary d-flex flex-column gap-1" style={{ fontSize: '14px' }}>
            <div>100% Original product</div>
            <div>Cash on delivery is available on this product.</div>
            <div>Easy return and exchange policy within 7 days.</div>
          </div>
        </div>
      </div>
    </div>
  );
}