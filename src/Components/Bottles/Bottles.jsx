import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { setToLS } from "../../Utilities/Utility";

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
    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <div>
                <h3>Cart: {cart.length}</h3>
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