import "./App.css";
import Header from "./components/Layout/Header";
import LandingPage from "./components/UI/LandingPage";
import Profile from "./components/Dashboard/Dashboard";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import Footer from "./components/Layout/Footer";
import { useState } from "react";
import { Routes, Route} from "react-router-dom";

function App() {
  const [registerIsShown, setRegisterIsShown] = useState(false);
  const [loginIsShown, setLoginIsShown] = useState(false)
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const loginHandler = () => {
    setisLoggedIn(true)
  }

  const logoutHandler = () => {
    setisLoggedIn(false)
  }


  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  const showRegisterHandler = () => {
    setRegisterIsShown(true);
  };

  const hideRegisterHandler = () => {
    setRegisterIsShown(false);
  };
  return (
    <div className="App">
       {registerIsShown && <Register onCloseRegister={hideRegisterHandler} />}
       {loginIsShown && <Login onLogin={loginHandler} onCloseLogin={hideLoginHandler} />}
        <Header onShowRegister={showRegisterHandler} isLoggedIn={isLoggedIn} onShowLogin={showLoginHandler} onLogout={logoutHandler} />
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} onShowRegister={showRegisterHandler}/>} />
        <Route path="dashboard" element={<Profile isLoggedIn={isLoggedIn}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
