import PropTypes from 'prop-types';
import Cart from "../Cart/Cart";
import './Carts.css'

const Carts = ({carts, removeFromCart}) => {
    console.log('this is carts', carts)
    return (
        <div className="all-carts-container">
            {
                carts.map(cart => <Cart key={cart} cart={cart} removeFromCart={removeFromCart}></Cart>)
            }
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}
export default Carts;