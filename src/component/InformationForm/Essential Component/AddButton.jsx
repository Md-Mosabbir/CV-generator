import "../../../style/Essential Component styles/AddButton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
export default function AddButton({buttonName, children}) {

  const [add, setAdd] = useState(false)

  const toggleAddButton = () => {
      setAdd(!add)
  }
  return (
    <>
      <div className= {`adding-button-container ${add ? 'hidden' : ''}`}>
        <button className="adding-button" onClick={toggleAddButton} >

          <FontAwesomeIcon icon={faPlus} size="xl"/>
          <h3>{buttonName}</h3> 

        </button>     
      

      </div>
      {add && ( <>{children}</>)} 
    </>
  )
}
