import { useState, useRef } from "react";
import Modal from './Modal.jsx';
import HeadingTwo from "./HeadingTwo.jsx";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState('');
  const modal = useRef();
  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if(enteredTask.trim() === '') {
      modal.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
     <Modal ref={modal} btnTxt="Ok!" >
      <HeadingTwo>Whoops! Did you forget something?</HeadingTwo>
      <p  className='text-stone-600 mb-4'>Please enter a task.</p>
    </Modal>
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
    </>
    
  );
}
