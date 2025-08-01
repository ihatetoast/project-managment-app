
import deskspaceImg from '../assets/laptop-3214756_640.png';
import Button from './Button.jsx';
import HeadingTwo from './HeadingTwo.jsx';

export default function Placeholder({onInitAddProject}) {

  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src={deskspaceImg}
        alt='a clipboard with an empty to-do list on'
        className='w-36 h-24 object-contain mx-auto'
      />
      <HeadingTwo>Let's get going</HeadingTwo>
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
