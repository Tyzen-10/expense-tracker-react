import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = (saveExpenseData) =>{
        const expenseData = {
            ...saveExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }
    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    const cancelEditingHandler = () =>{
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {isEditing===false&&<button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing===true&&<ExpenseForm onCancel={cancelEditingHandler} onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>}
        </div>
    );
}
export default NewExpense;