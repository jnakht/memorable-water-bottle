import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { getFromLS, removeFromLS, setToLS } from "../../Utilities/Utility";
import Carts from "../Carts/Carts";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('Bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    } ,[])
    
    

    const [cart, setCart] = useState([]);
    const handleCart = (bottle) => {
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        // set to Local Storage
        setToLS(bottle.id);
    }

    const handleRemoveFromCart = (id) => {
        // remove from UI
        const remaining = cart.filter(sCart => sCart.id !== id);
        setCart(remaining);

        // remove from local storage
        removeFromLS(id);
    }

    // load whats on localStorage and show when beginning of this web
    useEffect(() => {
        if (bottles.length) {
            const idOfitemsOnLS = getFromLS();
            // console.log('items on local storage: ', idOfitemsOnLS);
            // console.log('loaded bottles on that time', bottles);

            const SavedCart = [];
            for (const id of idOfitemsOnLS) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    SavedCart.push(bottle);
                }
            }
            setCart(SavedCart);
            console.log('full items on local storage', SavedCart);
        }

    } ,[bottles])



    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <div className="cart-section-container">
                <h3>Cart: {cart.length}</h3>
                <Carts carts={cart} handleRemoveFromCart={handleRemoveFromCart}></Carts>
            </div>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id}  bottle={bottle} handleCart={handleCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;