import { useRef } from 'react';

import Input from './Input';
import Modal from './Modal'
import HeadingTwo from './HeadingTwo';

export default function NewProject({ onCompleteAddProject, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const category = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const projTitle = title.current.value;
    const projCategory = category.current.value;
    const projDescription = description.current.value;
    const projDueDate = dueDate.current.value;

    if (
      projTitle.trim() === '' ||
      projCategory.trim() === '' ||
      projDescription.trim() === '' ||
      projDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    const inputData = {
      id: Math.round(Math.random() * 1000),
      title: projTitle,
      category: projCategory,
      description: projDescription,
      duedate: projDueDate,
    };

    onCompleteAddProject(inputData);
  }

  return (
    <>
    <Modal ref={modal} btnTxt="Ok!" onCancel={onCancel}>
      <HeadingTwo>Oy! Project info is incomplete</HeadingTwo>
      <p  className='text-stone-600 mb-4'>One or more of the fields was empty. </p>
      <p  className='text-stone-600 mb-4'>Please complete all fields for your project.</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button 
          onClick={onCancel}
          className='text-stone-700 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
          >
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
          type='date'
          min='2025-01-01'
          max='2030-12-31'
          elementType='input'
        />
      </div>
    </div>
    </>
    
  );
}
