import { useRef } from 'react';

import Input from './Input';

export default function NewProject({onCompleteAddProject}) {
  const title = useRef();
  const category = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const inputData = {
      id: Math.round(Math.random() * 1000),
      projTitle: title.current.value,
      projCategory: category.current.value,
      projDescription: description.current.value,
      projDueDate: dueDate.current.value
    }
    // todo validation
    onCompleteAddProject(inputData);

  }

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-700 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          <button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          ref={title}
          label='Title'
          htmlFor='title'
          id='title'
          type='text'
          elementType='input'
        />
        <Input
          ref={category}
          label='Category'
          htmlFor='category'
          id='category'
          elementType='select'
        />
        <Input
          ref={description}
          label='Details'
          htmlFor='description'
          id='description'
          elementType='textarea'
        />
        <Input
          ref={dueDate}
          label='Due by:'
          htmlFor='due-date'
          id='due-date'
          type="date"
          min="2025-01-01"
          max="2030-12-31"
          elementType='input'
        />
      </div>
    </div>
  );
}
