import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import LandingPageImage from './components/UI/LandingPage';
import Profile from './components/Dashboard/Dashboard';
import Register from './components/Authentication/Register';
import { useState } from 'react';

function App() {
  const [registerIsShown, setRegisterIsShown] = useState(false)
  
  const showRegisterHandler = () => {
    setRegisterIsShown(true)
  }

  const hideRegisterHandler = () => {
    setRegisterIsShown(false)
  }
  return (
    <div className="App">
      {registerIsShown && <Register onCloseRegister={hideRegisterHandler}/>}
      <Header onShowRegister={showRegisterHandler}/>
      <Profile/>
      {/* <LandingPageImage/> */}
    </div>
  );
}

export default App;
