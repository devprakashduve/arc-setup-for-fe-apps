// Modal/Modal.tsx

import React, { useState } from 'react'
import './Modal.scss'
import { ModalProps } from './interface'
import CloseButton from '../Closebutton'

const Modal: React.FC<ModalProps> = ({ onClose, title, children }) => {
  const [closed, setClosed] = useState(false)

  const handleClose = () => {
    setClosed(true)
  }

  return (
    !closed && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{title}</h2>
            <CloseButton align={'right'} clickFunction={handleClose} />
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    )
  )
}

export default Modal
