import "../../../style/Essential Component styles/FormButtons.css"

export default function FormButtons({submit, cancel, del}) {
  return (
    <div className="form-buttons">
        <button className="save-form" onClick={submit}>Save</button>               
        <button className="cancel-form" onClick={cancel}>Back</button>
        <button className="delete-form" onClick={del}>Delete</button> 
    </div>
  )
}
