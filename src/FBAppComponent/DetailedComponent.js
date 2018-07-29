import React from 'react';
import './DetailedComponent.css'

const DetailedComponent = (props) =>
{
    return (
        <div className="Detailed" >
        <p className="para"> Enter the Details: </p>
         <div>
         <label> Enter the Id: </label>
         <input type="text" name= "Id" onChange={props.handleIdChange} />
         </div>
        <div> 
        <label> Enter the Name: </label>
        <input type="text" name= "Name"  onChange={props.handleNameChange} />
        </div> 
        <div> 
        <label> Enter the Age: </label>
        <input type="text" name= "Age"  onChange={props.handleAgeChange} />
      
        </div> 
        <div> 
        <label> Enter the Lane Details: </label>
        <input type="text" name= "Lane"  onChange={props.handleLaneChange} />
        <br />
        <label> Enter the City: </label>
        <input type="text" name= "City"  onChange={props.handleCityChange} />
        <br />
        <label> Enter the State: </label>
        <input type="text" name= "State"  onChange={props.handleStateChange} />
             
        </div> 
        <div> 
        <label> Enter the Email Address: </label>
        <input type="text" name= "Emailaddress"  onChange={props.handleEmailChange}/>
       
        </div> 
        <div> 
        <label> Enter the Telephone No: </label>
        <input type="text" name= "Telephone"   onChange={props.handleTelephoneChange}  />
       
        </div> 
        
        </div>
    );
}

export default DetailedComponent;