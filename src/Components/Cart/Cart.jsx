import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    console.log('this is cart', cart);
    const {name, img, id} = cart;
    
    return (
        <div className='single-cart-card'>
            <p><small>Name: {name}</small></p>
            <img className="image-width" src={img} alt="" />
            <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
}
export default Cart;