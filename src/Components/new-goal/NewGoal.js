import React ,{useState} from "react";
import "./new-goal.css";
function NewGoal(props) {
  const [enteredText,setEnteredText] = useState('');

  const addGoalHandler = (event)=>{
    event.preventDefault();
    const newGoalData = {
      id: Math.random(),
      text:enteredText
    }
    console.log(enteredText)
    props.onAddGoal(newGoalData)
    setEnteredText('')
  }


  const textChangeHandler = (event)=>{
    setEnteredText(event.target.value)
    // console.log(enteredText)
  }
return (
  <form className="new-goals" onSubmit={addGoalHandler}>
    <input type="text" value={enteredText} onChange={textChangeHandler}/>
    <button type="submit">ADD GOAL</button>
  </form>
)


}

export default NewGoal;
