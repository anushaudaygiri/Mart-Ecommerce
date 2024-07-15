import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/ProductActions/ProductActioner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX} from '@fortawesome/free-solid-svg-icons'
import { increaseQuantity } from "../redux/ProductActions/ProductActioner";
import { decreaseQuantity } from "../redux/ProductActions/ProductActioner";

const Cart = () => {
    
    const cart_data = useSelector((state) => state.ProductData.cartData);
    const dispatch = useDispatch();
    const totalPrice = cart_data.reduce((prevValue, currentValue) => {
      return prevValue + (currentValue.price * currentValue.quantity);
  }, 0);

      return (
        <div >
            <div className="d-flex m-5">
              <div>
              {
                cart_data.map((item)=>{
                  return(
                    <div className="row m-3 border " >
                    <div className="col-md-2">
                     <img src={item.imgUrl} alt={item.productName} className="img-fluid"  />
                    </div>
                    <div className="col-md-3">
                       <h5>{item.productName}</h5>

                       <div className="row">
                           <p className="col-md-3">{item.price}*{item.quantity}</p>
                           <p className="col-md-3">${item.price*item.quantity}</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                      <p className="text-end" onClick={()=>{dispatch(removeFromCart(item.id))}}><FontAwesomeIcon icon={faX} /></p>
                      <button className="" onClick={()=>{dispatch(increaseQuantity(item))}} >+</button>
                      <button onClick={()=>{dispatch(decreaseQuantity(item))}}>-</button>
   
                    </div>
                 </div>
                  )
                })
              }
              </div>
             
              <div className="bordercd  ">

                <h3>cart summary</h3>
                <hr/>
                <p>totalPrice:</p>
                <p>{totalPrice}</p>

              </div>
            </div>

        </div>
      )
       
}
export default Cart

