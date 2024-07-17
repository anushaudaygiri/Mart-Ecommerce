import { ACTION_TYPE } from "../type/ActionType";

 export const addToCart = (product) => {
    return { type: ACTION_TYPE.ADD_TO_CART, payload: product };
  };
  export const removeFromCart = (id) => {
    return { type: ACTION_TYPE.REMOVE_FROM_CART, payload: id };
  };
  export const increaseQuantity=(product)=>{
    return {type:ACTION_TYPE.INCREMENT_QUANTITY,payload:product}
  }
  export const decreaseQuantity=(product)=>{
    return {type:ACTION_TYPE.DECREMENT_QUANTITY,payload:product}
    }
  export const selectContent=(content)=>{
    return {type:ACTION_TYPE.SELECT_CONTENT,payload:content}
  }
  export const searchproduct=(searchTerm)=>{
    return {type:ACTION_TYPE.SEARCH_PRODUCT,payload:searchTerm}
  }