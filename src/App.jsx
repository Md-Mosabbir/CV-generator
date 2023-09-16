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

  // edu array 
  // onj edu info



  const [eduFormData, setEduFormData] = useState({    
    school: '',
    degree: '',
    startEdu: '',
    endEdu: '',
    location: '',
  })

  const [allEduInfoArray, setAllEduInfoArray] = useState([])

  const handleEduFormChange = (event) => {
    const { name, value } = event.target;
    setEduFormData({ ...eduFormData, [name]: value });
  };
  

  const handleFormSubmit = (eduFormData) => {
    // Adding a new entry
    setAllEduInfoArray([...allEduInfoArray, eduFormData]);

  };

  const handleEduSubmit = () => {
    
    handleFormSubmit(eduFormData);
    
    setEduFormData({
      school: '',
      degree: '',
      startEdu: '',
      endEdu: '',
      location: '',
    });
  };

  // --------------------------------------------------------
  
  const [expFormData, setExpFormData] = useState({    
    company: '',
    position: '',
    startExp: '',
    endExp: '',
    locationXp: '',
    description: '',
  })

  const [allExpInfoArray, setAllExpInfoArray] = useState([])

  const handleExpFormChange = (event) => {
    const { name, value } = event.target;
    setExpFormData({ ...expFormData, [name]: value });
  };
  

  const handleExpFormSubmit = (expFormData) => {
    // Adding a new entry
    setAllExpInfoArray([...allExpInfoArray, expFormData]);

  };

  const handleExpSubmit = () => {
    
    handleExpFormSubmit(expFormData);
    
    setExpFormData({
      company: '',
      position: '',
      startExp: '',
      endExp: '',
      locationXp: '',
      description: '',
    });
  };
  
    



  return (
   <div className="app">
    
    <div className="edit">
        <NavigationBar/>
        <Personal nameval={nameval} emailval={emailval} phoneval={phoneval} addressVal={addressVal} setNameVal={setNameVal} setEmailVal={setEmailVal} setPhoneVal={setPhoneVal} setAddressVal={setAddressVal}/>
        <EducationCompiled eduForm={eduFormData} setEduform={handleEduFormChange} submit = {handleEduSubmit} />
        <ExperienceCompiled data={expFormData} setExpInfo={handleExpFormChange} submit={handleExpSubmit}/>

      
        
    </div>

    <div className="cv-container">
        <div className="main-cv">
            <PersonalOutput  name={nameval} mail={emailval} phone={phoneval} address={addressVal}/>
            <EducationOutput entries={allEduInfoArray}/>
            <ExperinceOutput entries={allExpInfoArray}/>
        </div>
     </div>
    
    
    
    
    

    
   
    
   </div>
  )
}

export default App
