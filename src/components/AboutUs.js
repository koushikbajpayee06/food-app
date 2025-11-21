import React from 'react'
import User from './User'
import UserClass from './UserClass'

class AboutUs extends React.Component{

  constructor(props){
    super(props);

    console.log(" parents constructor is load");
  }

  componentDidMount(){
    console.log(" Parent component did mount")
  }

  render(){
    console.log("Parents render is called")
      return (
        <div>
          <h1>About class component</h1>
          <h2>This is about us page</h2>
          <UserClass name={"Koushik Bajpayee(class)"} location={"Kolkata"}/>
          <UserClass name={"Jayeeta Barman(class)"} location={"Balurghat"}/>
          <UserClass name={"Saptarshi Pandey(class)"} location={"Bankura"}/>
        </div>
      )
  }
}


export default AboutUs
