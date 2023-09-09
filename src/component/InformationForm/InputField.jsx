import '../../style/inputField.css'

function InputField({labelName,nameText,typeText ,placeholderText, requiredBool}) {

 return (
    
    <div className='input-field'>
        <label htmlFor= {nameText} > {labelName} </label>
        <input type= {typeText} id= {nameText} name= {nameText} placeholder = {placeholderText}  {...(requiredBool && { required: true })} />
    </div>
  )
}

export default InputField
