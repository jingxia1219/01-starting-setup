import ExpenseItem from './ExpenseItem'
import '../../UI/Items.css'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react';
// let expenses= props.expenses;
  // const [filteredExpenses,setFilteredExpenses] = useState(expenses);
   // const filtered = expenses.filter(expense => 
    //   expense.date.getFullYear().toString() === selectedYear.toString()
    // )
function Items(props) {
  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
   
    setFilteredYear(selectedYear)
  }
  const filteredItems = props.expenses.filter( item => 
    item.date.getFullYear().toString() === filteredYear)
    return (
      <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     {filteredItems.map( expense =>
         <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            price={expense.amount} 
            date={expense.date} />
       )
      }
      </Card>
    </div>
    )
}
export default Items;