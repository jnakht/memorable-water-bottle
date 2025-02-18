import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart}) => {
    console.log('this is cart', cart);
    const {name, img} = cart;
    return (
        <div className='single-cart-card'>
            <p><small>Name: {name}</small></p>
            <img className="image-width" src={img} alt="" />
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
}
export default Cart;