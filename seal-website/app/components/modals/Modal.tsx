'use client';
import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';


interface ModalProps{
    isOpen?: boolean;
    allowClose:boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled: boolean;
    secondaryAction?: ()=> void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,onClose,allowClose,onSubmit,title,body,footer,actionLabel,disabled, secondaryAction, secondaryActionLabel
}) => {
    const[showModal, setShowModal] = useState(isOpen);
  useEffect(()=>{
    setShowModal(isOpen);
  },[isOpen]);

  const handleClose = useCallback(()=>{
    if(disabled){
        return;
    }
    setShowModal(false);
    setTimeout(() => {
        onClose();
    }, 300)
  },[disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);




  if(!isOpen){
    return null;
  }
  
    return (
    <>
    <div className="justify-center
    items-center
    flex
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-neutral-800/70">
        <div className="
      relative
      w-full
      md:w-5/6
      lg:w-5/6
      xl:w-4/5
      mt-40
      my-6
      mx-auto
      max-h-9vh
      overflow-y-auto
      lg:h-auto
      md:h-auto">
            <div className={`
            translate
            duration-300
            h-full
            
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}`}>
                <div className="
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-blue-200
                outline-none
                focus:outline-none">
                  {/* HEADER */ }
                    <div className="
                    flex
                    items-center
                    p-6
                    rounded-t
                    justify-center
                    relative
                    border-b-[1px]">
                     {allowClose &&  (<button onClick= {handleClose} className="
                        p-1
                        border-0
                        hover:opacity-70
                        transition
                        absolute
                        right-9">
                            <IoMdClose size={18}/>
                        </button>)}
                        <div className="text-4xl text-center font-semibold">
                          {title}
                        </div>
                    </div>
                    {/* BODY */}
                    <div className="relative p-6 text-2xl flex-auto">
                      {body}
                    </div>

                    {/* FOOTER */}
                    <div className="flex flex-col gap-2 p-6">
                      {footer}
                      <div className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                    justify-center
                  ">
                    {!disabled && actionLabel && (
                    <button
                      disabled={disabled}
                      onClick={handleSubmit}
                      className="text-center bg-black p-5 justify-center md:block cursor-pointer hover:bg-gray-700 transition rounded-xl">
                <div className='text-2xl font-bold text-center text-white'>
                    {actionLabel}
                </div>
                    </button>
                  )}
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    
    </>
  )
}

export default Modal