import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utills/UserContext';
UserContext

class AboutUs extends React.Component{

  constructor(props){
    super(props);

    // console.log(" parents constructor is load");
  }

  componentDidMount(){
    // console.log(" Parent component did mount")
  }

  render(){
    // console.log("Parents render is called");

      return (
        <div>
          <h1>About class component</h1>
          <div>
            LoggedIn User:
            <UserContext.Consumer>
              {({loggedInUser})=><h1 className='text-xl font-bold'>{loggedInUser}</h1>}
            </UserContext.Consumer>
          </div>
          <h2>This is about us page</h2>
          <UserClass name={"Koushik Bajpayee(class)"} location={"Kolkata"}/>
        </div>
      )
  }
}


export default AboutUs
