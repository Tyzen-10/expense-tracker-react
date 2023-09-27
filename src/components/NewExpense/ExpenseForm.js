import { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    const [enteredAmount,setenteredAmount] = useState("")
    const [enteredTitle,setenteredTitle] = useState("")
    const [enteredDate,setenteredDate] = useState("")
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value)
    }
    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setenteredDate(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const ExpenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        //sending back to parent component.
        props.onSaveExpenseData(ExpenseData);
        setenteredAmount('')
        setenteredTitle('')
        setenteredDate('')
    }
    /*
    const inputChangeHandler = (identifier,value) =>{
        if(identifier === "title"){
            setenteredTitle(value);
        }
        else if(identifier==="amount"){
            setenteredAmount(value)
        }
        else{
            setenteredDate(value)
        }
    }
    */
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value = {enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;