import "../../../style/Essential Component styles/FormButtons.css"

export default function FormButtons({submit}) {
  return (
    <div className="form-buttons">
        <button className="save-form" onClick={submit}>Save</button>               
        <button className="cancel-form">Cancel</button>
        <button className="delete-form">Delete</button> 
    </div>
  )
}
