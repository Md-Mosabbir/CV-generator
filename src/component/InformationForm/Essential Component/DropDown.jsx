import "../../../style/Essential Component styles/Dropdown.css"

export default function DropDown({nameDrop}) {
  return (
   <button className="dropdown">
    <h2>{nameDrop}</h2>
   </button>
  )
}
