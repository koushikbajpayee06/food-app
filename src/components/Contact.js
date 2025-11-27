import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className='font-bold text-2xl p-4 m-4 text-center'>This is Contact Us page</h2>
      <form>
        <input type='text' className='border border-black p-2 m-2' placeholder='name'></input>
        <input type='text' className='border border-black p-2 m-2' placeholder='message'></input>
        <button className='border bg-gray-300 rounded-lg border-black p-2 m-2'>Submit</button>
      </form>
    </div>
  )
}

export default Contact;
