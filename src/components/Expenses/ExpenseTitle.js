// import React, {useState} from 'react'

function ExpenseTitle(props) {
    // let title = props.title
// const [newTitle,setTitle] = useState(props.title);

//     const changeTitle = (event) => {
//         event.preventDefault();
//         setTitle(event.target.value) //set newTitle to new title input
//         title = newTitle;
//         event.value = ""
//     }
    return(
                <div className="expense-item__description"> 
                    <h2>{props.title}</h2>
                        {/* <form onSubmit={changeTitle}> 
                            <input value="" type="text" id='title__input' placeholder='Enter New Name'/>
                        </form> 
                        <button type='submit'>Change Title</button>      */}
                </div>
    )
    }

export default ExpenseTitle;