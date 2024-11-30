import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Visibility, VisibilityOff } from '@mui/icons-material';  // Material UI Icons
import { backdropClasses } from '@mui/material';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

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

  const handleGoogleResponse = (response) => {
    console.log('Google Response:', response);
    // Handle Google login logic
  };

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

            {/* Google Login Button */}
            <GoogleLogin
              onSuccess={handleGoogleResponse}
              onError={(error) => console.error('Google Sign-In Error', error)}
              useOneTap
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default SignUp;
