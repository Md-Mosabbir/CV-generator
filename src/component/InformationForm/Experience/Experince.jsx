import FormButtons from "../Essential Component/FormButtons";
import InputField from "../Essential Component/InputField";
import "../../../style/form.css"

export default function Experince() {
    return (

        <div className="form-container">
            
    
          <form>
            <InputField labelName={'Company Name'} nameText={'company-name'} typeText={'text'} placeholderText={'Enter Company Name'} requiredBool = {true} />
    
            <InputField labelName={'Position Title'} nameText={'position'} typeText={'text'} placeholderText={'Enter Position'} requiredBool = {true} />
    
            <InputField labelName={'Start Date'} nameText={'start-date'} typeText={'date'} placeholderText={'Enter Start Date '} requiredBool = {true} />
    
            <InputField labelName={'End Date'} nameText={'end-date'} typeText={'date'} placeholderText={'Enter End Date '} requiredBool = {true} />
    
            <InputField labelName={'Location'} nameText={'location'} typeText={'text'} placeholderText={'Enter Location '} />

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
    
          </form>
    
          <FormButtons/>
        </div>
       
      )
}
