import DropDown from "../Essential Component/DropDown"
import AddButton from "../Essential Component/AddButton"
import Education from "../Education/Education"


import "../../../style/InformationFormStyle/formEdu-Xp/edu-exp.css"
import { useState } from "react"

export default function EducationCompiled({eduForm, setEduform, submit}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showForm, setShowForm] = useState(true) // Initial state is true to show the form

  const toggleDropdown = () => {
    setShowForm(true)
    setIsDropdownOpen(!isDropdownOpen)

    if(isDropdownOpen === false){
      setShowForm(false) 
      setAdd(false)
      
    }
  };

  const handleCancel = () => {
    setShowForm(false) 
    setAdd(false)
  }

  const [add, setAdd] = useState(false)

  const toggleAddButton = () => {
    setAdd(!add)
    setShowForm(true) 
  }


  return (
    <div className="education-form-container">

      <DropDown nameDrop={'Education'} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} children={<><AddButton add={add} handleAdd={toggleAddButton} buttonName={'Education'} children={showForm && (<Education data={eduForm}  handleInput={setEduform} submit={submit} cancel={handleCancel}/>)}/></>
      }/>    
   
    </div>
    
  )
}
