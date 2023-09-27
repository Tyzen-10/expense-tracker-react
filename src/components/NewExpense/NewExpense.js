import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (saveExpenseData) =>{
        const expenseData = {
            ...saveExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}
export default NewExpense;