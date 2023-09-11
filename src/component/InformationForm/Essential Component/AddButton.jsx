import "../../../style/Essential Component styles/AddButton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function AddButton({buttonName}) {
  return (
    <div>
      <button className="adding-button">

        <FontAwesomeIcon icon={faPlus} size="xl"/>
         <h3>{buttonName}</h3> 

      </button>

    </div>
  )
}
