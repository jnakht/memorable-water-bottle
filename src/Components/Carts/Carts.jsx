import PropTypes from 'prop-types';
import Cart from "../Cart/Cart";
import './Carts.css'

const Carts = ({carts, handleRemoveFromCart}) => {
    console.log('this is carts', carts)
    return (
        <div className="all-carts-container">
            {
                carts.map(cart => <Cart key={cart} cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>)
            }
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
}
export default Carts;