import React, { useState } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { Visibility, VisibilityOff } from '@mui/icons-material';  // Material UI Icons
import google_icon from '../Images/google_icon.png';
import facebook_icon from '../Images/facebook_icon.png';
import mail_icon from '../Images/mail_icon.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InputAdornment from '@mui/material/InputAdornment';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // General error
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset all errors first
    setEmailError('');
    setPhoneError('');
    setPasswordError('');
    setName('');

    // Email validation: Ensure it's not empty
    if (email.trim() === '') {
      setEmailError('Email is required');
      return;
    }

    // Phone number validation: Ensure it starts with +61 and has 9 digits
    const phoneRegex = /^\+61[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Please enter a valid Australian phone number (+61xxxxxxxxx)');
      return;
    }

    // Password validation: Ensure it's not empty
    if (password.trim() === '') {
      setPasswordError('Password is required');
      return;
    }

    // If no errors, submit the form
    console.log('Account Created with Email:', email);
    console.log('Phone Number:', phone);
    setError('');
  };

  // Handle Google login response
  const login = useGoogleLogin({
    onSuccess: (response) => console.log('Google Login Success:', response),
    onError: () => console.error('Google Login Error'),
  });

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="signup">
        <div className="signup__left">
          {/* Empty div for content */}
        </div>
        <div className="signup__content">
          <p className='back__toHome' onClick={(e) => navigate('/') }><KeyboardBackspaceIcon />Back to Home</p>
          <div className="signup__inputs">
            <h2>Join us Today</h2>
            <p>Sign up using the form below</p>

            {/* Email Input */}
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="error">{emailError}</p>}

            {/* Phone Number Input */}
            <InputMask
              mask="+61 999 999 999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  placeholder="Enter your phone number"
                  required
                  error={!!phoneError}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+61</InputAdornment>,
                  }}
                />
              )}
            </InputMask>
            {phoneError && <p className="error">{phoneError}</p>}

            {/* Password Input */}
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

            {/* General Error Message */}
            {error && <p className="error">{error}</p>}

            {/* Submit Button */}
            <button onClick={handleSubmit} type="submit" className="signup__btn">
              Create Account
            </button>

            <div className="social__login">
              <p>Or sign in using:</p>

              {/* Custom Google Login Button */}
              <button className="google__button" onClick={login}>
                <img src={google_icon} alt="Google Icon" className="google__icon" />
                <p>Continue with Google</p>
              </button>

              <button className="facebook__button" onClick={login}>
                <img src={facebook_icon} alt="Facebook Icon" className="facebook__icon" />
                <p>Continue with Facebook</p>
              </button>

              <button className="email__button" onClick={(e) => navigate('/login')}>
                <img src={mail_icon} alt="Mail Icon" className="mail__icon" />
                <p>Continue with Email</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default SignUp;
