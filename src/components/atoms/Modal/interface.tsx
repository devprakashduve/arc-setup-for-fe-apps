// Modal/interface.tsx

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  isBackgroundFull: boolean
}
