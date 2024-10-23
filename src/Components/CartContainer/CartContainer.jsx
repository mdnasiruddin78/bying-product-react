
import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css'
import PropTypes from 'prop-types';


const CartContainer = ({hendleIsActiveStatus,isActive,
    selectedProducts,hendleDlete}) => {

    return (
        <div>
            <h3 className='text-2xl font-bold'>CartContainer</h3>

            <div className='flex space-x-20'>
                <div onClick={()=>hendleIsActiveStatus('cart')}
                className={`${isActive.cart?"btn active":"btn"}`}>CART</div>
                <div onClick={()=>hendleIsActiveStatus('about')} 
                className={`${isActive.cart?"btn":"btn active"}`}>ABOUT</div>
            </div>

           {isActive.cart?<Cart hendleDlete={hendleDlete} 
           selectedProducts={selectedProducts}></Cart>:<About></About>}

        </div>
    );
};

CartContainer.propTypes = {
    hendleIsActiveStatus: PropTypes.func,
    isActive: PropTypes.object,
    selectedProducts: PropTypes.array,
    hendleDlete: PropTypes.func,
}

export default CartContainer;