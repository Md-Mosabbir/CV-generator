import "../../../style/Essential Component styles/FormButtons.css"

export default function FormButtons({submit, cancel}) {
  return (
    <div className="form-buttons">
        <button className="save-form" onClick={submit}>Save</button>               
        <button className="cancel-form" onClick={cancel}>Cancel</button>
        <button className="delete-form">Delete</button> 
    </div>
  )
}
