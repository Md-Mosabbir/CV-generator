import FormButtons from "../Essential Component/FormButtons";
import InputField from "../Essential Component/InputField";


export default function Education({data, handleInput, submit, cancel, del}) {
  
  return (

    <div className="form-container">

      <form>
        <InputField labelName={'School'} nameText={'school'} typeText={'text'} placeholderText={'Enter School/ University '} requiredBool = {true} valueField={data.school} onChange={handleInput}/>

        <InputField labelName={'Degree'} nameText={'degree'} typeText={'text'} placeholderText={'Enter Degree/ Field Of Study'} requiredBool = {true} valueField={data.degree} onChange={handleInput}/>

        <InputField labelName={'Start Date'} nameText={'startEdu'} typeText={'text'} placeholderText={'Enter Start text '} requiredBool = {true} valueField={data.startEdu} onChange={handleInput}/>

        <InputField labelName={'End Date'} nameText={'endEdu'} typeText={'text'} placeholderText={'Enter End Date '} requiredBool = {true} valueField={data.endEdu} onChange={handleInput}/>

        <InputField labelName={'Location'} nameText={'location'} typeText={'text'} placeholderText={'Enter Location '} valueField={data.location} onChange={handleInput}/>

      </form>

      <FormButtons submit = {submit} cancel={cancel} del={del}/>
    </div>
   
  )
}
