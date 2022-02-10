// import React ,{useState}from 'react';

import '../../UI/ExpensesFilter.css';

const ExpensesFilter = (props) => {
  //  const [yearSelected,setYear] = useState("2022")
   const yearSelectHandler= (event) => {
     props.onChangeFilter(event.target.value)
        // setYear(event.target.value) //this will set the value of yearSelected to the selected year 
    }
    // props.onChangeFilter(yearSelected);
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange= {yearSelectHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;