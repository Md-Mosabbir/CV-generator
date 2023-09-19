import DropDown from "../Essential Component/DropDown"
import AddButton from "../Essential Component/AddButton"
import Education from "../Education/Education"


import "../../../style/InformationFormStyle/formEdu-Xp/edu-exp.css"
import { useState } from "react"




function DisplayList({entries, handleEdit }) {


    
  return (
    
    <div className="list-of-names-container">
        
        {entries.map((info) => (
        
        <div key={info.id} id= {info.id} className="entries" onClick={handleEdit}>
        
          <h2 style={{display: 'inline'}}>{info.school}</h2>
          
        </div>
    ))}

    </div>
  )
}


export default function EducationCompiled({entries, eduForm, setEduform, submit, handleDeleteEducation}) {
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

    
  const handleEdit = (e) => {
    setShowForm(true) 
    setAdd(true)
    e.stopPropagation()
    const id = e.target.id

    if(id !== ''){
      const findInfo = entries.find(info => info.id === id)

      if(findInfo){
        eduForm.id = findInfo.id
        
        eduForm.school = findInfo.school
        eduForm.degree = findInfo.degree
        eduForm.startEdu = findInfo.startEdu
        eduForm.endEdu = findInfo.endEdu
        eduForm.location = findInfo.location
      }
    }

  } 
  
  const handleDelete = () =>{
    setShowForm(false) 
    setAdd(false)
    handleDeleteEducation()
  }

  return (
    <div className="education-form-container">

      <DropDown nameDrop={'Education'} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} children={<>
      {!showForm && (<DisplayList entries={entries} handleEdit={handleEdit}/>)} 
      <AddButton 
      add={add} 
      handleAdd={toggleAddButton} 
      buttonName={'Education'} 
      children={showForm && (<Education data={eduForm}  handleInput={setEduform} submit={submit} cancel={handleCancel} del={handleDelete}/>)}/></>
      }/>    
   
    </div>
    
  )
}
