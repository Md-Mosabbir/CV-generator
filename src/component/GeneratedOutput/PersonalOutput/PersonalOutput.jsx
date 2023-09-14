import "../../../style/GeneratedOutput/Component style/personal-output.css"

export default function PersonalOutput({name, mail, phone, address}) {
  return (
    <div className="personal-info-container">
        <div className="personal-info-cv">
          <h1>{name}</h1>
          <div className="contact-info-container-cv">
            <span className="contact-cv">{mail}</span>
            <span className="contact-cv grid-right">{phone}</span>
            <span className="contact-cv address">{address}</span>
          </div>
          


        </div>
        <div className="image">
          <div className="image-prop"></div>
        </div>
    </div>
  )
}
