import clipboardImg from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function Placeholder({onInitAddProject}) {

  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src={clipboardImg}
        alt='a clipboard with an empty to-do list on'
        className='w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>Let's get going</h2>
      <p className='text-stone-400 mb-4'>
        Select a project to edit or add another project to your ever-growing
        list.{' '}
        <a
          className='text-stone-500 hover:text-stone-600'
          href='https://nanna-lil-puss-puss.fandom.com/wiki/Home_Video'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mother of god, Puss Puss.
        </a>
      </p>
      <p className='mt-8'>
        <Button onClick={onInitAddProject}>Create a new project</Button>
      </p>
    </div>
  );
}
