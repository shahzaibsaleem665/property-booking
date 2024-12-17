import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';  // Material UI Icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
}


// Toggle password visibility
const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

    return (
    <div className='login'>
          <div className="login__left">
          {/* Empty div for content */}

        </div>
        <div className="login__content">
        <p className='back__toHome' onClick={(e) => navigate('/') }><KeyboardBackspaceIcon />Back to home</p>
        <div className="login__inputs">
        <h2>Welcome to Homyra!</h2>
        <p>Log in using the form below</p>
        <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="error">{emailError}</p>}

            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <p className="error">{passwordError}</p>}
              <span className="password-eye" onClick={handleTogglePassword}>
                {showPassword ? (
                  <VisibilityOff style={{ cursor: 'pointer' }} />
                ) : (
                  <Visibility style={{ cursor: 'pointer' }} />
                )}
              </span>
            </div>
            <button onClick={handleSubmit} type="submit" className="login__btn">
              Log in
            </button>
            <div className='forget__pass'>
            <p>Forgot Password?</p>
            </div>
            


        </div>
        </div>
    </div>
  )
}

export default Login