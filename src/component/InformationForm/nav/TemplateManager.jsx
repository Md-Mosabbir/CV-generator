import "../../../style/InformationFormStyle/nav styles/template-manager.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faTrash, faCopy } from "@fortawesome/free-solid-svg-icons"

function TemplateManager() {
    return(
        <div className="template-manager">  .

            <button id="load-examples" ><FontAwesomeIcon icon={faCopy} size="xl" style={{color:" var(--input-label-colour)"}}/></button>
            <button id="clear"><FontAwesomeIcon icon={faTrash} size="xl" style={{color:" var(--input-label-colour)"}}/></button>
            
       
        </div>
    )
  
}

export default TemplateManager
