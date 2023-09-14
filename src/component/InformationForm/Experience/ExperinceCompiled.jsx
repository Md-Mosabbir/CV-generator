import DropDown from "../Essential Component/DropDown";
import AddButton from "../Essential Component/AddButton"
import Experince from "./Experince"

export default function ExperienceCompiled() {
  return (
    <div className="experince-form-container">
        <DropDown nameDrop={'Experience'} children={<><AddButton buttonName={'Experience'}/>
        <Experince/></>}/>
        
    </div>
  )
}
