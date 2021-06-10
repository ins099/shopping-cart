import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  LOAD_CURRENT_ITEM,
  ADJUST_QTY,
} from '../actionTypes/index';

const initialState = {
  products: [
    {id: 1, name: 'prod 1', desc: 'description1', price: 1},
    {id: 2, name: 'prod 2', desc: 'description2', price: 2},
    {id: 3, name: 'prod 3', desc: 'description1', price: 3},
  ], //{id, name, desc, price} ,
  cart: [], //{id, name, desc, price, qty}
  currentItem: null,
};

const shoppingReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //get the items data from the products array
      const item = state.products.find(prod => prod.id === action.payload.id);
      //check if item is in cart already
      const inCart = state.cart.find(prod =>
        prod.id === action.payload.id ? true : false,
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map(item => {
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item;
            })
          : [...state.cart, {...item, qty: 1}],
      };

    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };

    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {...item, qty: action.payload.qty}
            : item,
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shoppingReducers;
