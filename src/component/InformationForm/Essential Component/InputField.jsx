import '../../../style/Essential Component styles/InputField.css'

function InputField({labelName, nameText, typeText ,placeholderText, requiredBool = false, valueField, onChange }) {

 return (
    
    <div className='input-field'>
        <label htmlFor= {nameText} > {labelName} </label>
        <input type= {typeText} id= {nameText} name= {nameText} placeholder = {placeholderText} required = {requiredBool} value={valueField} onChange={onChange} />
    </div>
  )
}

export default InputField
