import FormButtons from "../Essential Component/FormButtons";
import InputField from "../Essential Component/InputField";
import "../../../style/InformationFormStyle/formEdu-Xp/form.css"

export default function Experince({data, setExpInfo, submit}) {
    return (

        <div className="form-container">        
            
    
          <form>
            <InputField labelName={'Company Name'} nameText={'company'} typeText={'text'} placeholderText={'Enter Company Name'} requiredBool = {true} valueField={data.company} onChange={setExpInfo}/>
    
            <InputField labelName={'Position Title'} nameText={'position'} typeText={'text'} placeholderText={'Enter Position'} requiredBool = {true} valueField={data.position} onChange={setExpInfo} />
    
            <InputField labelName={'Start Date'} nameText={'startExp'} typeText={'text'} placeholderText={'Enter Start Date '} requiredBool = {true} valueField={data.startExp} onChange={setExpInfo}/>
    
            <InputField labelName={'End Date'} nameText={'endExp'} typeText={'text'} placeholderText={'Enter End Date '} requiredBool = {true} valueField={data.endExp} onChange={setExpInfo}/>
    
            <InputField labelName={'Location'} nameText={'locationXp'} typeText={'text'} placeholderText={'Enter Location'} valueField={data.locationXp} onChange={setExpInfo} />

            <div className="input-field">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="10" value={data.description} onChange={setExpInfo}></textarea>
            </div>
    
          </form>
    
          <FormButtons submit={submit}/>
        </div>
       
      )
}
