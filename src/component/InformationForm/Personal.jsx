

function Personal() {
    
    return(
        <>
        <form>
            <h2 className="section-title">Personal Details</h2>
            <div className="input-group">
                <label htmlFor="name">
                    <span className="label-text">Full name</span>
                </label>
                <input type="text" id="name"/>
            </div>
            <div className="input-group">
                <label htmlFor="email">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" id="email"/>
            </div>
            <div className="input-group">
                <label htmlFor="phone">
                    <span className="label-text">Phone Number </span>
                </label>
                <input type="tel" id="phone"/>
            </div>
            <div className="input-group">
                <label htmlFor="address">
                    <span className="label-text">Address</span>
                </label>
                <input type="text" id="address"/>
            </div>
        </form>
        </>
    )
  
}

export default Personal