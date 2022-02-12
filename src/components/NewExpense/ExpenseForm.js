import './ExpenseForm.css'
import React, {useState} from 'react';

function ExpenseForm(props) {
    const [enteredTitle, setTitle] = useState("");
    const [enteredAmount,setAmount] = useState("");
    const [enteredDate,setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value) // enteredTitle is now set to the input from the title box
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value) //enteredAmount is now set to the input from the from the amount box
    }
    const DateChangeHandler = (event) => {
        setDate(event.target.value) //enteredData is now set to the input from the Date box
    }
    const submitHandler = (event) => {
        event.preventDefault(); //default action is to refresh page after we submit a form, and we dont want the entire page to be refreshed, only the affected component needs to be rerendered
        const expenseData = { // we want to create a new object that matches the other expense object on the Items.js page so we can later renders it
            title: enteredTitle, //saving enteredTitle with the input from title box to the title key in the new expenseData object
            amount: enteredAmount,//..
            date: new Date(enteredDate) //..
        } //we want to pass the object to App.js, but we can't skip level, and therefore first we need to pass it one level up to newExpense, the page where we're importing this component to.
        console.log(expenseData)
        setTitle("") //trying to clear the box after data has been saved to our object
        setAmount("")//..by creating value inside the input tag and point to enteredAmount, by using setState hook, will rerender the component and therefore will clear the input box
        setDate("")//..
        props.onSaveExpenseData(expenseData);
        setExpenseFormState(false)//as a part of the form submission handler, we pass the expenseData object to the props.saveNewExpense handler, so data will be passed to the parent where the function lives in
    }

    // implement a conditional statement to show a box that has an option saying add expense as default 
    // 

    const [expenseForm,setExpenseFormState] = useState(false) 
  
    const expenseFormHandler = () => {
        setExpenseFormState(true)
    }

    
    if (expenseForm === false) {
        return(
            <div className='create_expense__button'>
                <button onClick={expenseFormHandler}>Create Expense</button>
            </div>
        )
    }
    const cancelHandler = () => {
        setExpenseFormState(false)
    }

    return (
    <form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__control"> 
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={DateChangeHandler} value={enteredDate} type="date" min="2019-01-01" max="2022-12-31"></input>
            </div>
        </div>
            <div className="new-expense__actions">
                <button onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
    </form>
)
}

export default ExpenseForm;