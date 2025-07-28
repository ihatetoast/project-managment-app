import Button from './Button.jsx';

export default function Sidebar({onInitAddProject}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>My Projects</h2>
      <div>
        <Button onClick={onInitAddProject}>Add a project</Button>
        <ul className='mt-8'>
          <li className='flex my-4'>project</li>
          <li className='flex my-4'>project</li>
          <li className='flex my-4'>project</li>
        </ul>
      </div>
    </aside>
  );
}
