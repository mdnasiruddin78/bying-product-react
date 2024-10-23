import PropTypes from "prop-types";


const Navbar = ({selectedProducts}) => {
    return (
        <div className="flex max-w-6xl mx-auto justify-between p-10">
            <div className="text-2xl font-bold">
                logo
            </div>
            <div className="flex text-2xl font-bold list-none space-x-7">
                <li className="item">home</li>
                <li className="item">product</li>
                <li className="item">cart {selectedProducts}</li>
                <li className="item">$ 500</li>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    selectedProducts: PropTypes.number
}

export default Navbar;