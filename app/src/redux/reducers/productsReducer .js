import { ActionTypes } from "../contants/action_type";


const intialState = {
    products: [{
        id: 1,
        title: "Nithesh",
        category: "Programer"
    },],
};

export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const initialState = {
    basket: [],
    user: null,
};
export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER": {
            return {
                ...state,
                user: action.user
            }
        }
        case "ADD_TOBASKET":
            //logic to add to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            let newbasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //remove item
                newbasket.splice(index, 1);
            } else {
                console.warn(`cant remve product[ id: ${action.id}]`);
            }

            return { ...state, basket: newbasket };
        default:
            return state;
    };
}