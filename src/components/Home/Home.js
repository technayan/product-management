import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import './Home.css'

const Home = () => {
    const [products] = useProducts();

    return (
        <div>
            <h2>Welcome to Product Management!</h2>
                {
                    products.map(product => <div key={product._id} className='product-div'>
                        <div className='products-info'>
                            <h2>{product.productName}</h2>
                            <p>{product.description}</p>
                        </div>
                        <strong>Price: {product.price}</strong>
                    </div>)
                }
        </div>
    );
};

export default Home;