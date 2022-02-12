
import '../../UI/Items.css'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react';
import ExpensesList from './ExpensesList'; 
import ExpenseChart from './ExpenseChart';
import '../Chart/Chart.css';
import '../Chart/ChartBar.css'
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
    item.date.getFullYear().toString() === filteredYear);
  

    return (
      <div>
        <Card className='expenses'>
          <div className='chart'>
            <ExpenseChart expenses={filteredItems}/>
          </div> 
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
         <ExpensesList items ={filteredItems} />
      </Card>
    </div>
    )
} 
export default Items;