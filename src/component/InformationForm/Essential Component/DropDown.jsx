import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../../../style/InformationFormStyle/Dropdown styles/dropdownContainer.css"

import "../../../style/Essential Component styles/Dropdown.css";

export default function DropDown({ nameDrop, children, isDropdownOpen, toggleDropdown, }) {  



  return (
    <>
      <button className="dropdown" onClick={toggleDropdown}>
        <h2>{nameDrop}</h2>
        <FontAwesomeIcon
          icon={faCircleChevronDown}
          size="xl"
          rotation={isDropdownOpen ? 180 : 0}
          style={{
            color: "var(--brand-colour)",
            transition: "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s"
          }}
        />
      </button>
      {isDropdownOpen && (
        <div className="drop-down-container">
          {/* Your dropdown content here */}
          {children}
        </div>
      )}
    </>
  );
}








