import Tasks from './Tasks.jsx';

export default function SelectedProject({project, tasks, onDelete, onAddTask, onDeleteTask}) {

  const formattedDate = new Date(project.duedate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className='pg-4 mb-4 border-b-2 border-stone-300'>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb2">{project.title} ({project.category})</h2>
          <button className="text-stone-600 hover:text-red-500" onClick={onDelete}>Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
    </div>
  );
}
