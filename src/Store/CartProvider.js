import CartContext from "./cart-context";
import { useReducer } from 'react';


const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action ) => {
    if(action.type === 'ADD'){
        const updateItem = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItem,
            totalAmount : updateTotalAmount
        };
    }
    return defaultCartState;

};


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)

    const addItemToCartandeler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemToCartHandler = (id) => {
        defaultCartState({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items : [],
        totalAmount : 0,
        addItem: addItemToCartandeler,
        RemoveItem: removeItemToCartHandler
    }

return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)


}

export default CartProvider;