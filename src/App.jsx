import NavigationBar from "./component/InformationForm/nav/NavigationBar"
import Personal from "./component/InformationForm/Personal/Personal"
import EducationCompiled from "./component/InformationForm/Education/EducationCompiled"
import ExperienceCompiled from "./component/InformationForm/Experience/ExperinceCompiled"

import PersonalOutput from "./component/GeneratedOutput/PersonalOutput/PersonalOutput"
import EducationOutput from "./component/GeneratedOutput/EducationOutput/EducationOutput"
import ExperinceOutput from "./component/GeneratedOutput/ExperienceOutput/ExperinceOutput"

import "./style/InformationFormStyle/information-form-style.css"
import "./style/GeneratedOutput/GeneratedOutput.css"

import "./index.css"


import { useState } from "react"

function App() {
  const [nameval, setNameVal] = useState("")
  const [emailval, setEmailVal] = useState("")
  const [phoneval, setPhoneVal] = useState("")
  const [addressVal, setAddressVal] = useState("")
    

  return (
   <div className="app">
    
    <div className="edit">
        <NavigationBar/>
        <Personal nameval={nameval} emailval={emailval} phoneval={phoneval} addressVal={addressVal} setNameVal={setNameVal} setEmailVal={setEmailVal} setPhoneVal={setPhoneVal} setAddressVal={setAddressVal}/>
        <EducationCompiled/>
        <ExperienceCompiled/>

      
        
    </div>

    <div className="cv-container">
        <div className="main-cv">
            <PersonalOutput  name={nameval} mail={emailval} phone={phoneval} address={addressVal}/>
            <EducationOutput/>
            <ExperinceOutput/>
        </div>
     </div>
    
    
    
    
    

    
   
    
   </div>
  )
}

export default App
