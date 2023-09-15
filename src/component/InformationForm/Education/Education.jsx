import FormButtons from "../Essential Component/FormButtons";
import InputField from "../Essential Component/InputField";


export default function Education({data, handleInput, handleInputBlur, submit}) {
  
  return (

    <div className="form-container">

      <form>
        <InputField labelName={'School'} nameText={'school'} typeText={'text'} placeholderText={'Enter School/ University '} requiredBool = {true} valueField={data.school} onChange={handleInput}/>

        <InputField labelName={'Degree'} nameText={'degree'} typeText={'text'} placeholderText={'Enter Degree/ Field Of Study'} requiredBool = {true} valueField={data.degree} onChange={handleInput}/>

        <InputField labelName={'Start Date'} nameText={'start-date'} typeText={'date'} placeholderText={'Enter Start Date '} requiredBool = {true} valueField={data.startDate} onChange={handleInput} onBlur={handleInputBlur}/>

        <InputField labelName={'End Date'} nameText={'end-date'} typeText={'date'} placeholderText={'Enter End Date '} requiredBool = {true} valueField={data.endDate} onChange={handleInput} onBlur={handleInputBlur}/>

        <InputField labelName={'Location'} nameText={'location'} typeText={'text'} placeholderText={'Enter Location '} valueField={data.location} onChange={handleInput}/>

      </form>

      <FormButtons submit = {submit}/>
    </div>
   
  )
}
