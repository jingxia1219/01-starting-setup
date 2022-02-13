
import '../../UI/Items.css'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react';
import ExpensesList from './ExpensesList'; 
import ExpenseChart from './ExpenseChart';


function Items(props) {
  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
   
    setFilteredYear(selectedYear)
  }
  
  const filteredItems = props.expenses.filter( item => 
    item.date.getFullYear().toString() === filteredYear);
  console.log(filteredItems);

    return (
      <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseChart expenses={filteredItems}/>
         <ExpensesList items ={filteredItems} />
      </Card>
      </div>
    )
} 
export default Items;