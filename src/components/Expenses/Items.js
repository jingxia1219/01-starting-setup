import ExpenseItem from './ExpenseItem'
import '../../UI/Items.css'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react';

function Items(props) {
  const [filteredYear,setFilteredYear] = useState('2022');
  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear)}
    
  // console.log("line17",filteredYear);
  const filteredItems = props.expenses.filter( item => 
    item.date.getFullYear().toString() === filteredYear)
    return (
      <div>
        <Card className='expenses'>
        <ExpensesFilter selected ={filteredYear}  onChangeFilter={filterChangeHandler}/>
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