import React, { useState } from 'react'

const User = (props) => {
  const [count] = useState(0)
  const [count2] = useState(2)
  return (
    <div className='user-card mb-2'>
      <h1>Count:{count}</h1>
      <h1>Count:{count2}</h1>
      <h1>Name: {props.name}</h1>
      <h3>Location: Kolkata</h3>
      <h4>Contact:@Koushikbaju06</h4>
    </div>
  )
}
export default User
