import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) =>{
    //conditional returns
  if(props.items.length===0){
    return (
        <h2 className="expenses-list__fallback">Found No Expenses</h2>
    )
  }
  return ( 
    <ul className="expenses-list">{
    props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ))}
  </ul>
  );
  //end of conditional rendering.
}
export default ExpensesList;