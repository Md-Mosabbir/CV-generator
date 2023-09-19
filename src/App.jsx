
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
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [nameval, setNameVal] = useState("")
  const [emailval, setEmailVal] = useState("")
  const [phoneval, setPhoneVal] = useState("")
  const [addressVal, setAddressVal] = useState("")

  // edu array 
  // onj edu info



  const [eduFormData, setEduFormData] = useState({   
    id: '', 
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
  



  const handleEduSubmit = () => {
    const findEditIndex = allEduInfoArray.findIndex( itm => itm.id === eduFormData.id) 

    if (findEditIndex !== -1) {
      // If found, replace the existing item with eduFormData
      const updatedEduInfoArray = [...allEduInfoArray];
      updatedEduInfoArray[findEditIndex] = eduFormData;
      setAllEduInfoArray(updatedEduInfoArray);
    } else {
      const giveId = uuidv4();
      eduFormData.id = giveId;
      setAllEduInfoArray([...allEduInfoArray, eduFormData]);
    }



    
    setEduFormData({
      id: '',
      school: '',
      degree: '',
      startEdu: '',
      endEdu: '',
      location: '',
    });
  };

  const handleDeleteEducation = () => {

  
    if (eduFormData.id !== '') {
      // Create a new array without the entry to be deleted
      const updatedEntries = allEduInfoArray.filter(edu => edu.id !== eduFormData.id);
      
      // Update the state with the new array
      setAllEduInfoArray(updatedEntries);
    }
    else{
      return
    }

    setEduFormData({
      id: '',
      company: '',
      position: '',
      startExp: '',
      endExp: '',
      locationXp: '',
      description: '',
    });
  }

  // --------------------------------------------------------
  
  const [expFormData, setExpFormData] = useState({    
    id: '',
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
  
  const handleDeleteExperince = () => {

  
    if (eduFormData.id !== '') {
      // Create a new array without the entry to be deleted
      const updatedEntries = allExpInfoArray.filter(edu => edu.id !== expFormData.id);
      
      // Update the state with the new array
      setAllExpInfoArray(updatedEntries);
    }
    else{
      return
    }

    setExpFormData({
      id: '',
      company: '',
      position: '',
      startExp: '',
      endExp: '',
      locationXp: '',
      description: '',
    });
  }


  const handleExpSubmit = () => {
    const findEditIndex = allExpInfoArray.findIndex( itm => itm.id === expFormData.id) 

    if (findEditIndex !== -1) {
      // If found, replace the existing item with eduFormData
      const updatedExpArray = [...allExpInfoArray];
      updatedExpArray[findEditIndex] = expFormData;
      setAllExpInfoArray(updatedExpArray);
    } else {
      const giveId = uuidv4();
      expFormData.id = giveId;
      setAllExpInfoArray([...allExpInfoArray, expFormData]);
    }


    
    setExpFormData({
      id: '',
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

        <Personal nameval={nameval} emailval={emailval} phoneval={phoneval} addressVal={addressVal} setNameVal={setNameVal} setEmailVal={setEmailVal} setPhoneVal={setPhoneVal} setAddressVal={setAddressVal}/>
        <EducationCompiled entries={allEduInfoArray} eduForm={eduFormData} setEduform={handleEduFormChange} submit = {handleEduSubmit} setEduArray={setAllEduInfoArray} handleDeleteEducation={handleDeleteEducation} />
        <ExperienceCompiled entries={allExpInfoArray} data={expFormData} setExpInfo={handleExpFormChange} submit={handleExpSubmit} del={handleDeleteExperince}/>

      
        
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
