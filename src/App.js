import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './FBAppComponent/FbAppComponent'
import InputComponent from './FBAppComponent/InputComponent'
import DetailedComponent from './FBAppComponent/DetailedComponent';

class App extends Component {

state={ Id : "",
        Name:"",  
        Age: "",
        Lane:"",
        City:"",
        State:"",
        Email:"",
        Telephone:"",
        data:[
        {    id: "1",
             name:"Ashina Kakkar",
             Age:25,
             address : {
             lane: "B4/330 Nethravati Block NGV Kormangala",
             city:"Bengaluru",
             state:"Karnataka"
                       },
             EmailAddress:"kakkarashina@gmail.com",
             Telephone:"+91 9611541182"
        },
        {
          id: "2",
          name:"Loveleen popli",
          Age:25,
          address : {
          lane: "BTM Layout",
          city:"Bengaluru",
          state:"Karnataka"
                    },
          EmailAddress:"Loveleen.Popli@gmail.com",
          Telephone:"+91 984512875"


        },
        {
           id: "3",
             name:"Anupam Jagatdeo",
             Age:26,
             address : {
             lane: "Mantri Celestia Nanakramguda",
             city:"Hyderabad",
             state:"Telangana"
                       },
             EmailAddress:"anupam.jagatdeo@gmail.com",
             Telephone:"+91 8105499669"
        },
        {
          id: "4",
          name:"Shivani Goswami",
          Age:25,
          address : {
          lane: "BTM Layout near Udupi Garden",
          city:"Bengaluru",
          state:"Karnataka"
                    },
          EmailAddress:"shivani.goswami@gmail.com",
          Telephone:"+91 7894586231"
        }
      ]
}

handleIdChange = (event) => {
  this.setState({
    Id:event.target.value
  });
}

handleNameChange = (event) => {
  this.setState({
    Name:event.target.value
  });
}

handleAgeChange  = (event) => {
  this.setState({
    Age:event.target.value
  });
}

handleLaneChange  = (event) => {
  this.setState({
    Lane:event.target.value
  });
}

handleCityChange = (event) => {
  this.setState({
    City:event.target.value
  });
}

handleStateChange = (event) => {
  this.setState({
    State:event.target.value
  });
}

handleEmailChange  = (event) => {
  this.setState({
    Email:event.target.value
  });
}

handleTelephoneChange = (event) => {
  this.setState({
    Telephone:event.target.value
  });
}

ChangeHandler = (event) => {
  var x = {
    id: this.state.Id,
      name:this.state.Name,
      Age:this.state.Age,
      address : {
      lane: this.state.Lane,
      city:this.state.City,
      state:this.state.State
                },
      EmailAddress:this.state.Email,
      Telephone:this.state.Telephone
 }
 console.log(x);
 this.setState({data : x})
// console.log("Id:" +this.state.Id);
// console.log("Name:" +this.state.Name);
// console.log("Age"+ this.state.Age);
// console.log("Lane:" + this.state.Lane);
// console.log("City: " +this.state.City);
// console.log("State:" +this.state.State);
// console.log("Email Address:" +this.state.Email);
// console.log("Telephone:" + this.state.Telephone);
}

 render() {
    return (
      <div>
      <div  className="App">
        <HeaderComponent Header="Welcome to My React App..!!!" />
        {
          this.state.data.map(eachData => {
            return(
             <InputComponent  Id={eachData.id}
             name={eachData.name}
             Age={eachData.Age}
             address={eachData.address.lane}
             city={eachData.address.city}
             States={eachData.address.state}
             emailaddress={eachData.EmailAddress}
             telephone={eachData.Telephone}
                  />
            );
           })
          
        }
      
        </div>
        <DetailedComponent handleIdChange={this.handleIdChange} handleNameChange={this.handleNameChange}
        handleAgeChange={this.handleAgeChange} handleLaneChange={this.handleLaneChange} handleCityChange={this.handleCityChange}
        handleStateChange={this.handleStateChange} handleEmailChange={this.handleEmailChange} handleTelephoneChange={this.handleTelephoneChange}
        />
         <div>
         <button className="buttonSubmit" onClick={this.ChangeHandler} > Add Value </button>
         </div>
      </div>
    );
  }
}

export default App;
