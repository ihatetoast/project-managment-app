import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask }) {
  return (
    <section>
      <h3 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h3>
      <NewTask onAddTask={onAddTask}/>
      <p className="my-4 text-stone-800">No tasks assigned to this task.</p>

      <ul className="mt-8 rounded-md bg-stone-100 p-4">
        <li className="my-4 flex justify-between">beep</li>
        <li className="my-4 flex justify-between">bop</li>
        <li className="my-4 flex justify-between">boop</li>
      </ul>
    </section>
  );
}
