import React from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
const cartitem = <ul className = {classes['cart-item']}>{[{id: 'c1' ,name: "Sushi", amount : 2, price: 12.56},
].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal onClose = {props.onClose} >
            {cartitem}
            <div className ={classes.total}>
                <span>Total amount</span>
                <span>$35.65</span>
            </div>
            <div className ={ classes.actions}>
                <button className = {classes['button--alt']} onClick = {props.onClose}>Close</button>
                <button className = {classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
