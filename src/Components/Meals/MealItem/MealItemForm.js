import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';



const MealItemForm = (props) => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);


    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        // amountInputRef.current.value this always returns an string type data so to convert it to Number we use next line of code
        const enteredAmountNumber = +enteredAmount;
        
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            console.log("Not Valid")
            return;
        }
        else{
            setAmountIsValid(true)
        }

        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef} label="Amount" input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button type="submit">+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5) </p>}
        </form>
    )
}

export default MealItemForm