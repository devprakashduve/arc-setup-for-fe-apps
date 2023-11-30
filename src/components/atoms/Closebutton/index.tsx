import { CloseButtonProps } from './interface'
import './closeButton.scss'
import { addClass } from '@/components/reusableFunctionality/customFunctionality'
import Icon from '../Icon'

const CloseButton = (props: CloseButtonProps) => {
  return (
    <span
      className={addClass('close-button ' + props.align)}
      onClick={props.clickFunction}
    >
      <Icon
        iconElement={<i className="fa-sharp fa-solid fa-xmark fa-xl"></i>}
      />
    </span>
  )
}
export default CloseButton
