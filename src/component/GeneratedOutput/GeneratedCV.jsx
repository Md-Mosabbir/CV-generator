import PersonalOutput from "./PersonalOutput/PersonalOutput"
import "../../style/GeneratedOutput/GeneratedOutput.css"
import EducationOutput from "./EducationOutput/EducationOutput"
import ExperinceOutput from "./ExperienceOutput/ExperinceOutput"

function Generated() {
    
    return(
     <div className="cv-container">
        <div className="main-cv">
            <PersonalOutput/>
            <EducationOutput/>
            <ExperinceOutput/>
        </div>
     </div>
    )
  
}

export default Generated