import "../../../style/Essential Component styles/AddButton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddButton({buttonName, children, add, handleAdd}) {



  return (
    <>
      <div className= {`adding-button-container ${add ? 'hidden' : ''}`}>
        <button className="adding-button" onClick={handleAdd} >

          <FontAwesomeIcon icon={faPlus} size="xl"/>
          <h3>{buttonName}</h3> 

        </button>     
      

      </div>
      {add && ( <>{children}</>)} 
    </>
  )
}
