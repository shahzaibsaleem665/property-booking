import React from 'react';
import Header from './Pages/Header';
import Home from './Pages/Home';
import './styles/main.scss';
import HeroSection from './Components/HeroSection';
import SignUp from './Components/SignUp';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Property from './Pages/Property';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes> {/* Updated to Routes (v6) */}
          <Route path='/register' element={
            <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
              <SignUp />
            </GoogleOAuthProvider>
          } />
           <Route path='/login' element={
            <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
              <Login />
            </GoogleOAuthProvider>
          } />

            <Route path='/property' element={(         
            <>
              <Property />
            </>
          )}
          
          />  

          <Route path="/" element={(
            <>
              <Header />
              <HeroSection />
              <Home />
            </>
          )} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
