import Cart from "../Cart/Cart";
import './Carts.css'

const Carts = ({carts}) => {
    console.log('this is carts', carts)
    return (
        <div className="all-carts-container">
            {
                carts.map(cart => <Cart cart={cart}></Cart>)
            }
        </div>
    );
};

export default Carts;