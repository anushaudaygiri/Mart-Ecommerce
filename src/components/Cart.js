import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/ProductActions/ProductActioner";

const Cart = () => {
    
    const cart_data = useSelector((state) => state.ProductData.cartData);
    console.log(cart_data)
    const dispatch = useDispatch();
    const totalPrice = cart_data.reduce((prevsValue, currentValue) => {
        return prevsValue + currentValue.price;
      }, 0);
      return (
        <div >
            <div>
            <h3>Apple iPhone 13 Pro</h3>
            <p>$899.0 * 2 <span>$1798.00</span></p>
            </div>
            <div>
                <h3>Cart Summary</h3>
                <hr/>
                <p>Total Price :</p>
                <p>$1798.00</p>
            </div>

        </div>
      )
       
}
export default Cart