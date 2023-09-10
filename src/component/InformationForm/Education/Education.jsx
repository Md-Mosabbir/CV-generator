import FormButtons from "../Essential Component/FormButtons";
import InputField from "../Essential Component/InputField";


export default function Education() {
  return (

    <div className="form-container">

      <form>
        <InputField labelName={'School'} nameText={'school'} typeText={'text'} placeholderText={'Enter School/ University '} requiredBool = {true} />

        <InputField labelName={'Degree'} nameText={'degree'} typeText={'text'} placeholderText={'Enter Degree/ Field Of Study'} requiredBool = {true} />

        <InputField labelName={'Start Date'} nameText={'start-date'} typeText={'date'} placeholderText={'Enter Start Date '} requiredBool = {true} />

        <InputField labelName={'End Date'} nameText={'end-date'} typeText={'date'} placeholderText={'Enter End Date '} requiredBool = {true} />

        <InputField labelName={'Location'} nameText={'location'} typeText={'text'} placeholderText={'Enter Location '} />

      </form>

      <FormButtons/>
    </div>
   
  )
}
