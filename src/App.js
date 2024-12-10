import React from 'react';
import Header from './Pages/Header';
import Home from './Pages/Home';
import './styles/main.scss';
import HeroSection from './Components/HeroSection';
import SignUp from './Components/SignUp';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

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
