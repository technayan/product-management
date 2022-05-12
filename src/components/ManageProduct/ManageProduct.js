import React, { useEffect } from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();

    // deleteProduct handler
    const deleteProduct = id => {
        const proceed = window.confirm('Are you sure to delete this product?');
        if(proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => console.log(data))

            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining);
        }
        
    }
    return (
        <div>
            <h2>Manage Products</h2>
            {
                products.map(product => <div key={product._id} className='product-div'>
                    <div className='products-info'>
                        <h2>{product.productName}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div>
                        <strong>Price: {product.price}</strong>
                        <button style={{margin: '10px', padding: '10px', background: 'orangered', color: 'white', cursor: 'pointer'}} onClick={() => deleteProduct(product._id)}>X</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;