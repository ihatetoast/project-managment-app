
import { forwardRef,useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';

// using forwardRef to have an example of pre React 19 ref usage
const Modal = forwardRef(function Modal({ children, btnTxt, onCancel }, ref) {
// to expose a fcn that can be called from outside this component function, we use imp handle
// first pass the ref
// then an anonymous fcn that returns an object that exposes any properties or methods i want exposed to other compontents
// usually for modals, we are calling an open function (showmodal) that is on dialog
// so we use useRef to  dialog.current.showModal()

// creating open() here exposes the showmodal outside of this component

// the modal component is now added to the newProject as a child and the open is triggered in the error (empty val) if block
const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  });

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/80 p-4 rounded-md shadow-md' onClose={onCancel}>
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{btnTxt}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
