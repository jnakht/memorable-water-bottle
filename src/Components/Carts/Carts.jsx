import PropTypes from 'prop-types';
import Cart from "../Cart/Cart";
import './Carts.css'

const Carts = ({carts}) => {
    console.log('this is carts', carts)
    return (
        <div className="all-carts-container">
            {
                carts.map(cart => <Cart key={cart} cart={cart}></Cart>)
            }
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array.isRequired,
}
export default Carts;