

function Education() {
    
    return(
        <>
        <form>
            <h2 className="section-title">Education Details</h2>
            <div className="input-group">
                <label htmlFor="school">
                    <span className="label-text">School</span>
                </label>
                <input type="text" id="school"/>
            </div>
            <div className="input-group">
                <label htmlFor="degree">
                    <span className="label-text">Degree</span>
                </label>
                <input type="text" id="degree"/>
            </div>
            <div className="input-group">
                <label htmlFor="start-date">
                    <span className="label-text"> Start Date </span>
                </label>
                <input type="date" id="start-date"/>
                <label htmlFor="end-date">
                    <span className="label-text"> End Date </span>
                </label>
                <input type="date" id="end-date"/>
            </div>
            <div className="input-group">
                <label htmlFor="location">
                    <span className="label-text">Location</span>
                </label>
                <input type="text" id="location"/>
            </div>
        </form>
        </>
    )
  
}

export default Education