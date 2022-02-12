import '../Chart/Chart.css';
import '../Chart/ChartBar.css'

const ExpenseChart = props => {
    const chartDataPoints = [ 
    {label:'Jan', value: 0},
    {label:'Feb', value: 0},
    {label:'Mar', value: 0},
    {label:'Apr', value: 0},
    {label:'May', value: 0},
    {label:'Jun', value: 0},
    {label:'Jul', value: 0},
    {label:'Aug', value: 0},
    {label:'Sep', value: 0},
    {label:'Oct', value: 0},
    {label:'Nov', value: 0},
    {label:'Dec', value: 0}
    ];
    let maxValue = 0;
    props.expenses.forEach (expense => {
        const month = expense.date.getMonth(); //getMonth return 0 for Jan
        chartDataPoints[month].value = expense.amount; //chartDataPoints[month] gets the object in the array for the correct month, since index is the same as getMonth, 1 less than the actual month
        chartDataPoints.key = month; //key
        maxValue = expense.amount + maxValue; //maxValue
    })
    chartDataPoints.maxValue = maxValue;
    const chartDisplay = chartDataPoints.map( monthData => {
        let percentage = Math.round((monthData.value/maxValue)*100) + '%'
        console.log(percentage);
        return (
                <div className='chart-bar' key={monthData.label}>
                    <div className='chart-bar__inner'>
                        <div className='chart-bar__fill' style={{height:percentage}}>
                        </div>
                    </div> 
                    <div className='chart-bar__label'>{monthData.label}</div>
                 </div> 
        )
    })
    return(
        <div className='chart'>
            {chartDisplay}
        </div>
    )

    
};

export default ExpenseChart; 