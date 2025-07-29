import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    const taskId = Math.ceil(Math.random() * 100);
    const taskData = {
      id: taskId,
      task: enteredTask,
    };
    onAddTask(taskData);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 rounded-sm bg-stone-200 px-2 py-1"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
