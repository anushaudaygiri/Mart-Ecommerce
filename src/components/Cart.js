import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/ProductActions/ProductActioner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";
import Footer from "./footer/Footer";

const Cart = () => {
    const cart_data = useSelector((state) => state.ProductData.cartData);
    const dispatch = useDispatch();
    
    const totalPrice = cart_data.reduce((prevValue, currentValue) => {
        return prevValue + (currentValue.price * currentValue.quantity);
    }, 0);

    const renderCartItems = () => {
        if (cart_data.length === 0) {
            return (
                <div className="col-md-5 cart-item">
                    <div className="cart-empty-message">
                        <p>No items are add in Cart</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-md-5 cart-item">
                    {
                        cart_data.map((item) => (
                            <div className="row m-3 cart-details" key={item.id}>
                                <div className="col-md-2">
                                    <img src={item.imgUrl} alt={item.productName} className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <h5 className="productName">{item.productName}</h5>
                                    <div className="prize">
                                        <p className="expression">{item.price} * {item.quantity}</p>
                                        <p className="text-center w-1/5 font-semibold text-sm">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="plus" onClick={() => { dispatch(removeFromCart(item.id)) }}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </p>
                                    <div className="quantity">
                                        <button className="mx-1" onClick={() => { dispatch(increaseQuantity(item)) }}>+</button>
                                        <button onClick={() => { dispatch(decreaseQuantity(item)) }}>-</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            );
        }
    };

    return (
        <div className="cart-page">
            <div className="row m-5">
                {renderCartItems()}

                <div className="col-md-3 cart-summary">
                    <h3>Cart Summary</h3>
                    <hr />
                    <p>Total Price:</p>
                    <p className="total-price">${totalPrice}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;







