import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../../../style/InformationFormStyle/nav styles/content-manager.css"

import { faGear, faHouse } from "@fortawesome/free-solid-svg-icons"

function ContentManager() {
    return(
        <div className="content-manager">  
       
            <button id ='content'><FontAwesomeIcon icon={faHouse} size="xl" style={{color:" var(--input-label-colour)"}}/></button>
            <button id='customize' ><FontAwesomeIcon icon={faGear} size="xl" style={{color:" var(--input-label-colour)"}}/></button>
       
        </div>
    )
  
}

export default ContentManager
