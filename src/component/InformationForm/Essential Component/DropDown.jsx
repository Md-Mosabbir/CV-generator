import "../../../style/Essential Component styles/Dropdown.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
export default function DropDown({nameDrop}) {
  return (
   <button className="dropdown">
    <h2>{nameDrop} </h2>
    <FontAwesomeIcon icon={faCircleChevronDown}  size="xl"
    style={{color:" var(--brand-colour)"}}/>
   </button>
  )
}
