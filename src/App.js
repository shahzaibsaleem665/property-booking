import React from 'react';
import Header from './Pages/Header';
import './styles/main.scss';
import HeroSection from './Components/HeroSection';
import SignUp from './Components/SignUp';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route path='/register' >
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <SignUp />
    </GoogleOAuthProvider>
          </Route>
        </Switch>
      </Router>
       <Header />
      <HeroSection /> 
      
    </div>
  );
}

export default App;
