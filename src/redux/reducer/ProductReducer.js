

const initialState = {
  products: [],
  selectedContent:"sofa",
  cartData: JSON.parse(localStorage.getItem('cartData')) || [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const cartItemIndex = state.cartData.findIndex(item => item.id === action.payload.id);

      if (cartItemIndex >= 0) {
        // If item exists in cart, update quantity
        state.cartData[cartItemIndex].quantity += 1;
      } else {
        // If item doesn't exist in cart, add it
        state.cartData.push({ ...action.payload, quantity: 1 });
      }
      // Update localStorage
      localStorage.setItem('cartData', JSON.stringify(state.cartData));
      return {
        ...state,
        cartData: [...state.cartData],
      };

    case "REMOVE_FROM_CART":
      const filteredCartData = state.cartData.filter(item => item.id !== action.payload);
      // Update localStorage
      localStorage.setItem('cartData', JSON.stringify(filteredCartData));
      return {
        ...state,
        cartData: filteredCartData,
      };

    case "INCREMENT_QUANTITY":
      const cartItemIndex1 = state.cartData.findIndex(item => item.id === action.payload.id);
      if (cartItemIndex1 >= 0) {
        state.cartData[cartItemIndex1].quantity += 1;
      }
      // Update localStorage
      localStorage.setItem('cartData', JSON.stringify(state.cartData));
      return {
        ...state,
        cartData: [...state.cartData],
      };

    case "DECREMENT_QUANTITY":
      const cartItemIndex2 = state.cartData.findIndex(item => item.id === action.payload.id);
      if (cartItemIndex2 >= 0){
        if (state.cartData[cartItemIndex2].quantity > 1) {
          state.cartData[cartItemIndex2].quantity -= 1;
          } else {
            state.cartData.splice(cartItemIndex2, 1);
            }
      }
      // Update localStorage
      localStorage.setItem('cartData', JSON.stringify(state.cartData));
      return {
        ...state,
        cartData: [...state.cartData],
      };
      case 'SELECT_CONTENT':
        return {
          ...state,
          selectedContent: action.payload,
          };

    default:
      return state;
  }
};


