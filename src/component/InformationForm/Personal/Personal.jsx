import InputField from "../Essential Component/InputField";
import '../../../style/InformationFormStyle/Personal styles/personal.css'


export default function Personal({nameval, emailval, phoneval, addressVal, setNameVal, setEmailVal, setPhoneVal, setAddressVal }) {



  

  return (
    <form className="personal-info">
        <h2>Personal Information</h2>

        <InputField labelName={'Name'} nameText= {'name'} typeText= {'text'} placeholderText={'Please Enter Your Full Name'} requiredBool={true} valueField={nameval} onChange={(e) => setNameVal(e.target.value)}/>

        <InputField labelName={'Email'} nameText= {'email'} typeText= {'email'} placeholderText={'Please Enter Email'} requiredBool={true} valueField={emailval} onChange={(e) => setEmailVal(e.target.value)}/>

        <InputField labelName={'Phone Number'} nameText= {'telephone'} typeText= {'tel'} placeholderText={'Please Enter Phone Number'} requiredBool={true} valueField={phoneval} onChange={(e) => setPhoneVal(e.target.value)} />

        <InputField labelName={'Address'} nameText= {'address'} typeText= {'text'} placeholderText={'Please Enter Address'} requiredBool={true} valueField={addressVal} onChange={(e) => setAddressVal(e.target.value)} />

    </form>
  )
}
