import React from 'react';
import Header from './Pages/Header';
import Home from './Pages/Home';
import './styles/main.scss';
import HeroSection from './Components/HeroSection';
import SignUp from './Components/AuthUser/SignUp';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Components/AuthUser/Login';
import Property from './Pages/Property';
import ImageDetails from './Components/Properties/ImageDetails';


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

            <Route path="/property/:typeOf/:addressSlug" element={(         
            <>
              <Property />
            </>
          )}
          
          />  

<Route path="/imagedetails" element={(         
            <>
              <ImageDetails />
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
