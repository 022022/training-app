import { useState, useRef, useEffect } from 'react';

export default function SettingsModal(){
  const [isOpen, setShow ] = useState(false);

  function toggleShow(){
    setShow(!isOpen);
  }

  const modal = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if(modal.current) (modal.current as HTMLDialogElement).showModal();
    } else {
      if(modal.current) (modal.current as HTMLDialogElement).close();
    }
  }, [isOpen]);

  return  <>
          <button className='border border-gray-600 px-5 py-2.5 rounded-lg' onClick={toggleShow}>
              Settings
          </button>
          {isOpen &&
              <dialog ref={modal}
                className='backdrop:bg-black backdrop:bg-opacity-50
                max-w-[500px] bg-white flex flex-col gap-4 p-4'
              >
                <button onClick={toggleShow}>Icon Close</button>
                Modal Contents
              </dialog>
          }
  </>
}