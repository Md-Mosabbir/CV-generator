import DropDown from "../Essential Component/DropDown";
import AddButton from "../Essential Component/AddButton"
import Experince from "./Experince"

export default function ExperienceCompiled({data, setExpInfo, submit}) {
  return (
    <div className="experince-form-container">
        <DropDown nameDrop={'Experience'} children={<><AddButton buttonName={'Experience'} children={<Experince data={data} setExpInfo={setExpInfo} submit={submit}/>}/>
        </>}/>
        
    </div>
  )
}
