import React,{useState} from "react";
import useInput from "../../hooks/use-input";
import classes from "./Register.module.css";
import { validateEmail, validatePassword } from "./validation.js";
import RegisterModal from "../UI/RegisterModal";
import { useNavigate } from "react-router-dom";

const confirmHandler = () => {};

const Login = (props) => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("12345");
  const navigate = useNavigate();
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => validateEmail(value.trim()));

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordEmailInput,
  } = useInput((value) => validatePassword(value.trim()));

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
                style={{
                  border: emailInputHasError ? "1px solid #ff0033" : "none",
                }}
                type="email"
                id="email"
                value={email}
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
              />
              {emailInputHasError && <p>input not a valid email</p>}
            </div>
            <div className={classes.registerEmail}>
              <label htmlFor="password">Password</label>

              <input
                style={{
                  border: passwordInputHasError ? "1px solid #ff0033" : "none",
                  marginBottom: "1%",
                }}
                type="password"
                id="password"
                value={password}
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordInputHasError && (
                <p>entered password is not a valid password</p>
              )}
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
