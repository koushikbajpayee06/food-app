import React from 'react'
import User from './User'
import UserClass from './UserClass'
const AboutUs = () => {
  return (
    <div>
      <h2>This is about us page</h2>
      <User name={"Koushik Bajpayee(functional)"}/>
      <UserClass name={"Koushik Bajpayee(class)"} location={"Kolkata"}/>
    </div>
  )
}

export default AboutUs
