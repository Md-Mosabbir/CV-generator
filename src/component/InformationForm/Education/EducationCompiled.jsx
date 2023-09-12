import DropDown from "../Essential Component/DropDown";
import AddButton from "../Essential Component/AddButton"
import Education from "../Education/Education"
import "../../../style/InformationFormStyle/Dropdown styles/dropdownContainer.css"

import "../../../style/InformationFormStyle/formEdu-Xp/edu-exp.css"

export default function EducationCompiled() {
  return (
    <div className="education-form-container">
        <DropDown nameDrop={'Education'}/>
        <div className="drop-down-container">
        <AddButton buttonName={'Education'}/>
        <Education/>
        </div>
    </div>
  )
}
