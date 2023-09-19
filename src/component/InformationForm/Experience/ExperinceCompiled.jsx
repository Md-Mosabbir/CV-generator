import DropDown from "../Essential Component/DropDown";
import AddButton from "../Essential Component/AddButton"
import Experince from "./Experince"
import { useState } from "react";

function DisplayList({entries, handleEdit }) {
    
  return (
    
    <div className="list-of-names-container">
        
        {entries.map((info) => (
        
        <div key={info.id} id= {info.id} className='entries' onClick={handleEdit}>
        
          <h2 style={{display: 'inline'}}>{info.company}</h2>
          
        </div>
    ))}

    </div>
  )
}

export default function ExperienceCompiled({entries, data, setExpInfo, submit, del}) {



  

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
        data.id = findInfo.id
        
        data.company = findInfo.company
        data.position = findInfo.position
        data.startExp = findInfo.startExp
        data.endExp = findInfo.endExp
        data.locationXp = findInfo.locationXp
        data.description = findInfo.description
      }
    }

  }

  const handleDelete = () => {
    setShowForm(false);
    setAdd(false);

    del()

  }

  return (
    <div className="experince-form-container">
        <DropDown nameDrop={'Experience'} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} children={
        <>
          {!showForm && (<DisplayList entries={entries} handleEdit={handleEdit}/>)} 
           <AddButton add={add}
           handleAdd={toggleAddButton}
           buttonName={'Experience'} 
           children={showForm && ( < Experince data={data} setExpInfo={setExpInfo} submit={submit} cancel={handleCancel} del={handleDelete} />)}/>
        </>}/>
        
    </div>
  )
}
