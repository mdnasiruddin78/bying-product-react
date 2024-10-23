import { useEffect, useState } from 'react';
import './Allproducts.css'
import Product from '../Product/Product';
import PropTypes from 'prop-types';


const Allproducts = ({hendleSelectedProducts}) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    return (
        <div>
            <h3 className='text-2xl font-bold'>All Products</h3>
            {
                products.map((product,idx) => <Product key={idx} product={product} 
                hendleSelectedProducts={hendleSelectedProducts}></Product>)
            }
        </div>
    );
};

Allproducts.propTypes = {
    hendleSelectedProducts: PropTypes.func
}

export default Allproducts;