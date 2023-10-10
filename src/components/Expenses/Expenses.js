import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log("inside Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  //Assignment code
  //sub expenses array filter
  const subExpenses = props.expenses.filter(
    (subexp) => subexp.date.getFullYear().toString() === filteredYear
  );
  console.log(subExpenses);
  //conditional rendering
  let expensesContent = <p style={{ color: "white" }}>No Expenses Found</p>;
  if(subExpenses.length>0){
    expensesContent = subExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ))
  }
  //end of conditional rendering.
  return (
    //also changed props.expenses.map to subExpenses.map
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};
export default Expenses;
