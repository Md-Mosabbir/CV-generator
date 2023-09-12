import DropDown from "../Essential Component/DropDown";
import AddButton from "../Essential Component/AddButton"
import Education from "../Experience/Experince"

export default function ExperienceCompiled() {
  return (
    <div className="experince-form-container">
        <DropDown nameDrop={'Experience'}/>
        <div className="drop-down-container">
        <AddButton buttonName={'Experience'}/>
        <Education/>
        </div>
    </div>
  )
}
