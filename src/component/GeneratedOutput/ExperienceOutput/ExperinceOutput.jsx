import "../../../style/GeneratedOutput/Component style/edu-xp.css"

  export default function ExperinceOutput({ entries }) {
    return (
      <div className="education-container">
        <div  className=' edu-ex-style'>
        <h3 className="edu-xp-title">Experince</h3>
  
        {entries.map((info, index) => (
          
          <div key={index} className='each-xp'>
          
          <div className="xp-content">
            <span>{info.startExp} - {info.endExp}</span>
            <span>{info.locationXp}</span>
          </div>
          <div className="xp-content">
            <h3>{info.company}</h3>
            <p>{info.position}</p>
            <p className="description">{info.description}</p>
          </div>
        </div>
      ))}
          
        </div>
        
   
      </div>
    );
  }
  
  
  