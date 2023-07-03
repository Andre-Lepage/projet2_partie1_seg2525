import Navbar from "./Navbar";
import React, { useRef } from 'react';

const Join = () => {
    const formRef = useRef(null);
    const clear = () => {

    }

    const sub = (event) => {
        event.preventDefault();
        document.getElementById("confirmation").style.display="block"
        formRef.current.reset();
    }

    const reset = (event) => {
        document.getElementById("confirmation").style.display="none"
        
    }

    return ( 
        <div>
            <Navbar></Navbar>
            <div className="title">
                <form ref={formRef} onSubmit={sub}>
                    <h3 className="join-title">Please Follow the steps below to apply to our team </h3>
                    <h4 className="step">Step 1: Enter your personal information</h4>
                    <div className="first-last-name" >
                        <div className="first-name-div">
                            <label className="comment-label" for="first-name">First name:</label><br/>
                            <input  type="text" id="first-name" name="first-name" onChange={reset}/><br/>
                        </div>
                        <div>
                            <label className="comment-label"  for="last-name">Last name:</label><br/>
                            <input type="text" id="last-name" name="last-name" onChange={reset}/>
                        </div>
                    </div>
                    <div className="birth-date">
                        <div>
                            <label className="comment-label"  for="birthday">BirthDate</label><br/>
                            <input type="date" id="birthday" name="birthday" onChange={reset}/>
                        </div>
                        
                        
                        
                    </div>

                    <h4 className="step">Step 2: Enter your location details</h4>
                    <div className="country">
                        <div>
                            <label className="comment-label"  for="country">Country</label><br/>
                            <input type="text" id="country" name="country" onChange={reset}/>
                        </div>
                    </div>
                    <div className="city-zip" >
                        <div className="first-name-div">
                            <label className="comment-label" for="city">City</label><br/>
                            <input  type="text" id="city" name="city" onChange={reset}/><br/>
                        </div>
                        <div>
                            <label className="comment-label"  for="Zip-Code">Zip Code</label><br/>
                            <input type="text" id="Zip-Code" name="Zip-Code" onChange={reset}/>
                        </div>
                    </div>

                    <h4 className="step">Step 3: Enter important job information </h4>
                    <div className="expected-position" >
                        <div className="first-name-div">
                            <label className="comment-label" for="expected">Expected Salary</label><br/>
                            <input  type="text" id="expected" name="expected" onChange={reset}/><br/>
                        </div>
                        <div>
                            <label className="comment-label" for="position">Position Applying For</label><br/>
                            <select name="position" id="position"  onChange={reset}>
                                <option value="Writer">Writer</option>
                                <option value="Editor">Editor</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                    </div>
                    <div className="email-resume" >
                        <div className="first-name-div">
                            <label className="comment-label" for="email">Email</label><br/>
                            <input  type="text" id="email" name="email"  onChange={() =>reset}/><br/>
                        </div>
                        <div>
                            <label className="comment-label"  for="resume">Resume</label><br/>
                            <input type="file" id="resume" name="resume"  onChange={() =>reset}/>
                        </div>
                    </div>
                    <input type="submit" id="submit-app" name="submit"/>
                    <div id="confirmation">
                        <h3>Success! We have received your application</h3>
                    </div>
                </form>
            </div>
            
        </div>
     );
}
 
export default Join ;