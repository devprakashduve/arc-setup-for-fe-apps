import { CloseButtonProps } from './interface'
import './closeButton.scss'
import { addClass } from '@/components/reusableFunctionality/customFunctionality'

const CloseButton = (props: CloseButtonProps) => {
  return (
    <span
      className={addClass('close-button ' + props.align)}
      onClick={props.clickFunction}
    >
      &times;
    </span>
  )
}
export default CloseButton
