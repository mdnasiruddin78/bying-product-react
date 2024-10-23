import PropTypes from 'prop-types';
import './Product.css'


const Product = ({product,hendleSelectedProducts}) => {
    const {id,name,image,description,price,isFeature} = product;
    return (
        <div className='cart'>
            <img src={image} alt="" />
            <h3 className='text-2xl font-bold'>{name}</h3>
            <p className='text-gray-500'>{description}</p>
            <div>
                <p>${price}</p>
                <p>{isFeature?"feature category":"not category"}</p>
                
            </div>
            <button onClick={()=>hendleSelectedProducts(product)} className='cart-button'>Add to cart</button>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
    hendleSelectedProducts: PropTypes.func,
}

export default Product;