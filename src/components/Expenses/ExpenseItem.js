// import React, {useState} from 'react';

import '../../UI/ExpenseItem.css';
import Card from './Card';

import ExpenseTitle from './ExpenseTitle';
import ExpenseDate from './ExpenseDate';
import ItemPrice from './ItemPrice';

function ExpenseItem(props) {
    
    return(
        <li>
            <Card className="expense-item">
                    <ExpenseDate date = {props.date} />
                    <ExpenseTitle title = {props.title} />
                    <ItemPrice price = {props.price}/>  
            </Card> 
        </li>
    )
}

export default ExpenseItem;