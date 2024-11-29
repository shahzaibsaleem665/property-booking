import React from 'react'

function SignUp() {
  return (
    <div className='signup'>
        <div className="signup__content">
        <h2>Sign Up</h2>
        
          <input type="text" id="name" placeholder="Enter your name" required />

          <button type="submit">Create Account</button>
     
        </div>
    </div>
  )
}

export default SignUp