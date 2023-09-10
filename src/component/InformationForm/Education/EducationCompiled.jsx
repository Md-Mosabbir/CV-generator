import DropDown from "../Essential Component/DropDown";
import AddButton from "../Essential Component/AddButton"
import Education from "../Education/Education"

export default function EducationCompiled() {
  return (
    <div className="education-container">
        <DropDown nameDrop={'Education'}/>
        <div className="drop-down-container">
        <AddButton buttonName={'Education'}/>
        <Education/>
        </div>
    </div>
  )
}
