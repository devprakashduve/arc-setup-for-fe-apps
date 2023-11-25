// Alert.tsx
'use client'
import './Alert.scss'
import { useState } from 'react'
import { AlertProps } from './interface'
import CloseButton from '../Closebutton'

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const [closed, setClosed] = useState(false)

  const handleClose = () => {
    setClosed(true)
  }

  return (
    !closed && (
      <div className={`alert alert-${type}`}>
        <span>{message}</span>
        <CloseButton clickFunction={handleClose} align={'right'} />
      </div>
    )
  )
}

export default Alert
