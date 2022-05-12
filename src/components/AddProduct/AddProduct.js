import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);

        // Send data to backend (server side)
        const url = `http://localhost:5000/products`;
        fetch (url, {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then (res => res.json())
        .then (result => console.log(result))
        
        // Reset the Form
        reset();

        // Alert 
        window.alert('Product Added!');
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add Product</h2>
                <input className='form-input' placeholder='Product Name' {...register("productName", { required: true })} />
                <textarea className='form-input' placeholder='Description'{...register("description")} />
                <input className='form-input' placeholder='Price'type="number" {...register("price")} />
                <input className='form-input' type="submit" value='Add Product'/>
            </form>
        </div>
    );
};

export default AddProduct;