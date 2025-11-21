import React from 'react'
import User from './User'
import UserClass from './UserClass'

class AboutUs extends React.Component{

  constructor(props){
    super(props);

    // console.log(" parents constructor is load");
  }

  async componentDidMount(){
    // console.log(" Parent component did mount")
    const data = await fetch("https://api.github.com/users/koushikbajpayee06");
    const json = await data.json();
    console.log(json);
  }

  render(){
    // console.log("Parents render is called")
      return (
        <div>
          <h1>About class component</h1>
          <h2>This is about us page</h2>
          <UserClass name={"Koushik Bajpayee(class)"} location={"Kolkata"}/>
        </div>
      )
  }
}


export default AboutUs
