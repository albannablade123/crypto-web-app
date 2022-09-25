import React,{useState} from "react";
import classes from "./Register.module.css";
import RegisterModal from "../UI/RegisterModal";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("12345");
  const navigate = useNavigate();

  const handleChangeEmail = (value) => {
    setEmail(value)
  }

  const handleChangePassword = (value) => {
    setPassword(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== "admin@admin.com" && password !== "12345") {
        return
    }
    localStorage.setItem("emailData", "admin@admin.com");
    localStorage.setItem("passwordData", "12345");
    props.onLogin();
    props.onCloseLogin();
    navigate("/dashboard");
  };

  return (
    <RegisterModal onClose={props.onCloseLogin}>
      <form onSubmit={handleSubmit}>
        <div className={classes.registerModal}>
          <div className={classes.registerTitle} style={{ display: "flex" }}>
            <h1>Sign in</h1>
            <button onClick={props.onCloseLogin}>x</button>
          </div>

          <div>
            <div className={classes.registerEmail}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className={classes.registerEmail}>
              <label htmlFor="password">Password</label>

              <input
                type="password"
                id="password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className={classes.registerButton}>
            Sign in
          </button>
        </div>
      </form>
    </RegisterModal>
  );
};

export default Login;
