import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  const taskListItems = tasks.map((task) => (
    <li key={task.id} className="flex justify-between my-4">
      <span>{task.text}</span>
      <button className="text-stone-700 hover:text-red-500" 
      onClick={()=>onDeleteTask(task.id)}>Clear</button>
    </li>
  ));
  return (
    <section>
      <h3 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h3>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="my-4 text-stone-800">No tasks assigned to this task.</p>
      ) : (
        <ul className="mt-8 rounded-md bg-stone-100 p-4">{taskListItems}</ul>
      )}
    </section>
  );
}
