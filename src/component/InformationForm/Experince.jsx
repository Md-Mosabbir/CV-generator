

function Experience() {
    
    return(
        <>
        <form>
            <h2 className="section-title">Experience Details</h2>
            <div className="input-group">
                <label htmlFor="company">
                    <span className="label-text">Company Name</span>
                </label>
                <input type="text" id="company"/>
            </div>
            <div className="input-group">
                <label htmlFor="position">
                    <span className="label-text">Position Title</span>
                </label>
                <input type="text" id="position"/>
            </div>
            <div className="input-group">
                <label htmlFor="start-date-office">
                    <span className="label-text"> Start Date </span>
                </label>
                <input type="date" id="start-date-office"/>
                <label htmlFor="end-date-office">
                    <span className="label-text"> End Date </span>
                </label>
                <input type="date" id="end-date-office"/>
            </div>
            <div className="input-group">
                <label htmlFor="location-office">
                    <span className="label-text">Location</span>
                </label>
                <input type="text" id="location-office"/>
            </div>
        </form>
        </>
    )
  
}

export default Experience