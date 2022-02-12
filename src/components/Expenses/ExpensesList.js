import '../../UI/ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
    // we want to implement the conditional logic here whether there is list or no list
      
    let expenseContent = <div className='expenses-list__fallback'><h2 >No Expenses</h2></div>;
    if (props.items.length > 0) 
    {expenseContent = props.items.map( expense =>
       <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      price={expense.amount} 
      date={expense.date} />)
    }
    return(
        <li className='expenses-list'>
        {expenseContent}
        </li>
    )
}

export default ExpensesList;