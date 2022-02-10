import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense (props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,//spread the key value pair in the object and add an id to form a new object that matches other expenses
            id: Math.random().toString()//this will generate a random number, might have dups, but works for this project, not a good way to do it in reality of course
        }
        console.log(expenseData) //now we get the new entered data using form in ExpenseForm
        props.onAddExpense(expenseData) //this is to pass the new data object along to the parent App.js where all expenses are being rendered on the DOM
      }

    return (
<div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
    {/* we create a new prop, make it a funciton, acts like a handler and place it inside the form submit handler, to have it to be called when form is submitted, and it should take in the newExpense Object  */}
</div>
        )
}

export default NewExpense;