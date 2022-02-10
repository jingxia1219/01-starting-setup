import  '../../UI/ExpenseDate.css';
import Card from './Card'

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", {month:"long"});
    const date = props.date.toLocaleString("default",{day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__date">{date}</div>
        </Card>
    )
}

export default ExpenseDate;