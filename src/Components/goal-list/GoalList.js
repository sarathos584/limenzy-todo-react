import React from "react";
import "./goallist.css";
const GoalList = (props) => {
  const {goals} = props

  return <ul className="goal-list container">
          {
            goals.map(goal=>{
              console.log(goal.text + "from goal")
              return (
                <li key={goal.id}>{goal.text}</li>
              )
            })
          }
  </ul>;
};

export default GoalList;
