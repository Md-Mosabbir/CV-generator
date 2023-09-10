import InputField from "../Essential Component/InputField";
import '../../../style/personal.css'

export default function Personal() {
  return (
    <form className="personal-info">
        <h2>Personal Information</h2>
        <InputField labelName={'Name'} nameText= {'name'} typeText= {'text'} placeholderText={'Please Enter Your Full Name'} requiredBool={true} />
        <InputField labelName={'Email'} nameText= {'email'} typeText= {'email'} placeholderText={'Please Enter Email'} requiredBool={true}/>
        <InputField labelName={'Phone Number'} nameText= {'telephone'} typeText= {'tel'} placeholderText={'Please Enter Phone Number'} requiredBool={true}/>
        <InputField labelName={'Address'} nameText= {'address'} typeText= {'text'} placeholderText={'Please Enter Address'} requiredBool={true}/>

    </form>
  )
}
