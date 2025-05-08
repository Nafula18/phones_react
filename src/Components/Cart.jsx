import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";


const Cart = () => {
    const { state } = useLocation(); // Access the cart state passed from the GetProducts component
    const [cart, setCart] = useState([]);

    // On component mount, check if there's any cart data in state
    useEffect(() => {
        if (state && state.cart) {
            setCart(state.cart);
        } else {
            console.log("No cart data found in state.");
        }
    }, [state]);

    // If cart is empty, show a message
    if (cart.length === 0) {
        return (
            <div className="container">
                <Navbar/>
               <h2 className="text-warning">Your Cart</h2>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    // If cart has items, render them
    return (
        <div className="container">
            
            <h1>Your Cart</h1>
            {cart.map((product, index) => (
                <div key={index} className="card mb-3" id="bel">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img
                                src={`https://Lido.pythonanywhere.com/static/images/${product.product_photo}`}
                                alt={product.product_name}
                                className="card-img"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-dark">{product.product_name}</h5>
                                <p className="card-text text-primary ">{product.product_desc}</p>
                                <p className="card-text text-danger">
                                    <b>{product.product_cost} Ksh</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
