import PropTypes from "prop-types";


const Cart = ({selectedProducts,hendleDlete}) => {
    
    return (
        <div>
          {
            selectedProducts.map((product) => (
                <div>
                    <div className="flex space-x-4">
                        <img className="w-20" src={product.image} alt="" />
                        <h3>name</h3>
                        <button onClick={()=>hendleDlete(product.id)}>delete</button>
                    </div>
                </div>
            ))
          }
        </div>
    );
};

Cart.propTypes = {
    selectedProducts: PropTypes.array,
    hendleDlete: PropTypes.func,
}

export default Cart;