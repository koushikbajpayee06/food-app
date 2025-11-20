import React from 'react'

const User = (props) => {
  return (
    <div className='user-card mb-2'>
      <h1>Name: {props.name}</h1>
      <h3>Location: Kolkata</h3>
      <h4>Contact:@Koushikbaju06</h4>
    </div>
  )
}
export default User
