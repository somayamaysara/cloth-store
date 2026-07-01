import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
const [formData, setFormData] = useState({ email: '', password: '' });

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
};

return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
    <div className="text-center mb-4">
        <h2 className="text-uppercase fw-normal d-inline-flex align-items-center gap-2" style={{ fontFamily: 'serif' }}>
        Login
        <svg width="40" height="2" className="ms-1">
            <line x1="0" y1="1" x2="40" y2="1" stroke="#333" strokeWidth="2" />
        </svg>
        </h2>
    </div>
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '450px' }}>
        <div className="mb-3">
        <input
            type="email"
            className="form-control rounded-0 py-2"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
        />
        </div>
        <div className="mb-3">
        <input
            type="password"
            className="form-control rounded-0 py-2"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
        />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4" style={{ fontSize: '14px' }}>
        <span className="text-dark" style={{ cursor: 'pointer' }}>Forgot your password?</span>
        <Link to="/signup" className="text-dark text-decoration-none fw-medium">
            Create account
        </Link>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-dark rounded-0 px-5 py-2 text-uppercase fw-medium">
            Sign In
        </button>
        </div>
    </form>
    </div>
);
}