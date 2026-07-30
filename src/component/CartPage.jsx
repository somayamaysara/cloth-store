import React from 'react';
import { useCart } from '../component/CartContext';

export default function Card() {
    const { cart, removeFromCart } = useCart();

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    if (cart.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h3>Your Cart is Empty</h3>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="row">
                <div className="col-12 col-md-8">
                    {cart.map((item, index) => (
                        <div key={`${item.id}-${item.size}-${index}`} className="d-flex align-items-center justify-content-between border-bottom py-3">
                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                                    className="border p-1"
                                />
                                <div>
                                    <h6 className="mb-1">{item.title}</h6>
                                    <p className="mb-1 text-secondary" style={{ fontSize: '14px' }}>
                                        Price: <strong>{item.price} SR</strong>
                                    </p>
                                    <span className="badge bg-light text-dark border me-2">Size: {item.size}</span>
                                    <span className="badge bg-light text-dark border">Qty: {item.quantity}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeFromCart(item.id, item.size)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="col-12 col-md-4 mt-4 mt-md-0">
                    <div className="card p-3 bg-light border">
                        <h5 className="mb-3">Order Summary</h5>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Total Price:</span>
                            <strong>{calculateTotal()} SR</strong>
                        </div>
                        <button className="btn btn-dark w-100 text-uppercase mt-3 rounded-0">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}