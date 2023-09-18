import DropDown from "../Essential Component/DropDown";
import AddButton from "../Essential Component/AddButton"
import Experince from "./Experince"
import { useState } from "react";

export default function ExperienceCompiled({entries, data, setExpInfo, submit}) {


  function DisplayList({entries }) {
    
    return (
      
      <div className="list-of-names-container">
          
          {entries.map((info) => (
          
          <div key={info.id} className='entries'>
          
            <h2>{info.company}</h2>
            
          </div>
      ))}
  
      </div>
    )
  }
  

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
    <div className="experince-form-container">
        <DropDown nameDrop={'Experience'} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} children={
        <>
          {!showForm && (<DisplayList entries={entries}/>)} 
           <AddButton add={add}
           handleAdd={toggleAddButton}
           buttonName={'Experience'} 
           children={showForm && ( < Experince data={data} setExpInfo={setExpInfo} submit={submit} cancel={handleCancel} />)}/>
        </>}/>
        
    </div>
  )
}
