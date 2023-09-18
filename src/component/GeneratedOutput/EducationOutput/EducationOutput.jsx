import '../../../style/GeneratedOutput/Component style/edu-xp.css';

export default function EducationOutput({ entries }) {
  return (
    <div className="education-container">
      <div  className=' edu-ex-style'>
      <h3 className="edu-xp-title">Education</h3>

      {entries.map((info) => (
        
        <div key={info.id} className='each-edu'>
        
        <div className="edu-content">
          <span>{info.startEdu} - {info.endEdu}</span>
          <span>{info.location}</span>
        </div>
        <div className="edu-content">
          <h3>{info.school}</h3>
          <p>{info.degree}</p>
        </div>
      </div>
    ))}
        
      </div>
      
 
    </div>
  );
}


