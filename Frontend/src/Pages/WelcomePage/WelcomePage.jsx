import "./WelcomePage.css"
const WelcomePage = () => {
    return (
        <div>
            <h2 className="text">Welcome to the RM-Game</h2>
            <p className="text">Please select how many Rounds you want to play</p>
           <div>
               <div className="form-check">
                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                       <label className="form-check-label" htmlFor="flexRadioDefault1">
                           Default radio
                       </label>
               </div>
               <div className="form-check">
                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                   <label className="form-check-label" htmlFor="flexRadioDefault1">
                       Default radio
                   </label>
               </div>
               <div className="form-check">
                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                   <label className="form-check-label" htmlFor="flexRadioDefault1">
                       Default radio
                   </label>
               </div>
               <div className="form-check">
                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                   <label className="form-check-label" htmlFor="flexRadioDefault1">
                       Default radio
                   </label>
               </div>
           </div>

            <button type="submit" >Submit</button>
            
        </div>
    )
}
export default WelcomePage;