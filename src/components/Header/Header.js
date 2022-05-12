import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/add-product'}>Add Product</Link>
            <Link to={'/manage-product'}>Manage Product</Link>
        </nav>
    );
};

export default Header;