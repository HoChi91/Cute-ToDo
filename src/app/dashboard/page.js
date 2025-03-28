"use client";

import Link from "next/link";
import DateComponent from "../components/date";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  // Declare a state to store the task list
  const [tasks, setTasks] = useState([]); // Initially empty list
  const [task, setTask] = useState(""); // State to manage user input
  const [completedTasks, setCompletedTasks] = useState(new Set()); // Stores completed tasks
  const router = useRouter();

  // Handles user input
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Adds a task to the list
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]); // Adds the task to the list
      setTask(""); // Resets the input field
    }
  };

  // Handles clicking on a task to toggle its completion
  const toggleTaskCompletion = (task) => {
    const updatedCompletedTasks = new Set(completedTasks);
    if (updatedCompletedTasks.has(task)) {
      updatedCompletedTasks.delete(task); // Remove if already completed
    } else {
      updatedCompletedTasks.add(task); // Add if not completed yet
    }
    setCompletedTasks(updatedCompletedTasks);
  };

  // Calculates progress
  const progress =
    tasks.length > 0 ? (completedTasks.size / tasks.length) * 100 : 0;

  const handleClick = () => {
    router.push(`/finishDay?data=${progress}`);
  };

  return (
    <div className="dashDiv">
      <div className="top-section">
        <DateComponent />
        <div className="right-section">
          <div className="progression">
            <h3>Progress</h3>
            <progress id="progress-bar" value={progress} max="100"></progress>
            <p>{Math.round(progress)}%</p>
          </div>
          <div className="add-task">
            <form onSubmit={addTask}>
              <input
                type="text"
                placeholder="What are your tasks?"
                value={task}
                onChange={handleInputChange}
              />
              <button type="submit">Add Task</button>
            </form>
          </div>
        </div>
      </div>
      <div className="task-container">
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={completedTasks.has(task) ? "checked" : ""}
              onClick={() => toggleTaskCompletion(task)}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleClick}>Finish the Day</button>
    </div>
  );
}
