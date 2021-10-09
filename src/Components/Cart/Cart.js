import React, { useContext } from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hadItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id  => {
        cartCtx.removeItem(id)
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount:1})
    };

    const cartItems = (
        <ul className={classes['cart-items']}>{
            cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    // bind preconfigure a function for future executions and preconfigure the argument that funciton will receive when it got executed
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}>
                </CartItem>))}
        </ul>);
    return (
        // We are adding this Modal Component so that when this Cart element loads it doesn't laod inside 
        // root element we have created a seprate section called overlays section it will load there

        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.hideCart} className={classes['button--alt']}>Close</button>

                {hadItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;
