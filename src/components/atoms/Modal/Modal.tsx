// Modal/Modal.tsx

import React, { useState } from 'react'
import './Modal.scss'
import { ModalProps } from './interface'
import CloseButton from '../Closebutton'
import { addClass } from '@/components/reusableFunctionality/customFunctionality'

const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  children,
  isOpen,
  isBackgroundFull,
}) => {
  // const [closed, setClosed] = useState(!isOpen)

  // const handleClose = () => {
  //   setClosed(!closed)
  // }

  return (
    isOpen && (
      <div className="modal">
        <div
          className={
            isBackgroundFull
              ? addClass('modal-content,fillBackground')
              : addClass('modal-content')
          }
        >
          <div className="modal-header">
            <h2>{title}</h2>
            <CloseButton align={'right'} clickFunction={onClose} />
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    )
  )
}

export default Modal
