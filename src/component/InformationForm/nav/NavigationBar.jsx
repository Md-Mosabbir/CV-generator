import ContentManager from "./ContentManager"
import TemplateManager from "./TemplateManager"

import "../../../style/InformationFormStyle/nav styles/nav.css"

function NavigationBar() {
    return(
    <nav className="navigation-bar">   
        <ContentManager/>     
        <TemplateManager/>       
    </nav>
    )
  
}

export default NavigationBar
