import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const NewsLetter = () => {
    // state management
    const [email,setEmail]=useState('')
    const handleSubmission = (e) => {
        e.preventDefault()
        toast.success('Subscribed')
        setEmail('')
    }
  return (
    <div className="card card-side shadow-2xl p-10 rounded-lg text-black">
        <div className='flex items-center justify-center'>
              <p>Subscribe to our NewsLetter for better food recepie</p> 
         </div>
    <div className="card-body">
      <h2 className="card-title">Subscription</h2>
     <form onSubmit={handleSubmission}>
              <p>Email</p>
       <div className="card-actions justify-end flex flex-col">
         <input value={email} onChange={e=>setEmail(e.target.value)} className='block bg-white p-2  rounded-lg' type='email' required />
         <br />
         <input className='block btn  bg-orange-400 text-white' type='submit'/>
      </div>
      </form>
    </div>
  </div>
  )
}

export default NewsLetter