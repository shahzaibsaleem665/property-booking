import React, { useState } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { Visibility, VisibilityOff } from '@mui/icons-material';  // Material UI Icons
import google_icon from '../Images/google_icon.png';
import facebook_icon from '../Images/facebook_icon.png';
import mail_icon from '../Images/mail_icon.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      setError('Email is required');
    } else {
      setError('');
      // Handle account creation logic
      console.log('Account Created with Email:', email);
    }
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
        <div className="signup__content">
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'} // Toggle input type based on state
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="password-eye" onClick={handleTogglePassword}>
                  {showPassword ? (
                    <VisibilityOff style={{ cursor: 'pointer' }} />
                  ) : (
                    <Visibility style={{ cursor: 'pointer' }} />
                  )}
                </span>
              </div>
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="signup__btn">
              <span>Create Account</span>
            </button>
          </form>

          <div className="social__login">
            <p>Or sign in using:</p>

            {/* Custom Google Login Button */}
            <button className="google__button" onClick={login}>
              <img src={google_icon} alt="Google Icon" className="google__icon" />
              Continue with Google
            </button>
            <button className="facebook__button" onClick={login}>
              <img src={facebook_icon} alt="Facebook Icon" className="facebook__icon" />
              Continue with Facebook
            </button>

            <button className="email__button" onClick={login}>
              <img src={mail_icon} alt="Mail Icon" className="mail__icon" />
              Continue with Email
            </button>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default SignUp;
