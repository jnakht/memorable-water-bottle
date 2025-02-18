import PropTypes from 'prop-types';
import './Cart.css'
import { removeFromLS } from '../../Utilities/Utility';
const Cart = ({cart, removeFromCart}) => {
    console.log('this is cart', cart);
    const {name, img, id} = cart;
    const handleRemove = () => {
        removeFromLS(id);
        removeFromCart(id);
    }
    return (
        <div className='single-cart-card'>
            <p><small>Name: {name}</small></p>
            <img className="image-width" src={img} alt="" />
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}
export default Cart;