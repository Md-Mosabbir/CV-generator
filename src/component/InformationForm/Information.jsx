import EducationCompiled from "./Education/EducationCompiled";
import ExperienceCompiled from "./Experience/ExperinceCompiled";
import NavigationBar from "./nav/NavigationBar";
import Personal from "./Personal/Personal"

export default function Information() {
  return (
    <div className="edit">
        <NavigationBar/>
        <Personal/>
        <EducationCompiled/>
        <ExperienceCompiled/>
        
    </div>
  )
}
