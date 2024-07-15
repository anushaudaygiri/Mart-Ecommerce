const initialState = {
    products: [],
    cartData: [],
  };
  export const productReducer = (state = initialState, action) => {
    // console.log("action", action);
    switch (action.type) {
      case "ADD_TO_CART":
        
        return {
           
          ...state,
          cartData: [...state.cartData, action.payload],
         
        };
       
      case "REMOVE_FROM_CART":
        
        const filteredProduct = state.cartData.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        return {
          ...state,
          cartData: filteredProduct,
        };
      default:
        return state;
    }
  };
