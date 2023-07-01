import logo from "./logo.svg";
import "./App.css";
import NewGoal from "./Components/new-goal/NewGoal";
import GoalList from "./Components/goal-list/GoalList";
import React, { useState } from "react";
function App() {
  const [goals, setCourseGoals] = useState([
    { id: 1, text: "First course" },
    { id: 2, text: "Second course" },
    { id: 3, text: "three course" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevGoal) => prevGoal.concat(newGoal));
    console.log(goals)
  };
  return (
    <div className="App container-fluid">
      <h1>Study React</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={goals}/>
    </div>
  );
}

export default App;
