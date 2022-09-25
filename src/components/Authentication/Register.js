import React from "react";
import RegisterModal from "../UI/RegisterModal";
import classes from "./Register.module.css";
import useInput from "../../hooks/use-input";
import { validateEmail, validatePassword } from "./validation.js";

const Register = (props) => {
  // const validateEmail = (email) => {

  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

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

  const {
    value: enteredConfirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangedHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordEmailInput,
  } = useInput((value) => value.trim() === enteredPassword);

  const confirmHandler = (event) => {
    event.preventDefault();

    const formIsValid =
      firstNameIsValid &&
      lastNameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      confirmPasswordIsValid;
      
    if (!formIsValid) {
      return;
    }

    props.onCloseRegister();

    // props.onConfirm({
    //   name: enteredName,
    //   street: enteredStreet,
    //   city: enteredCity,
    //   postalCode: enteredPostalCode,
    // });
  };

  return (
    <RegisterModal onClose={props.onCloseRegister}>
      <div>
        <form onSubmit={confirmHandler}>
          <div className={classes.registerModal}>
            <div className={classes.registerTitle} style={{ display: "flex" }}>
              <h1>Create a Free Account</h1>
              <button onClick={props.onCloseRegister}>x</button>
            </div>

            <div className={classes.nameDiv}>
              <div className={classes.inp1}>
                <label htmlFor="firstName">First Name</label>
                <br />
                <input
                  style={{
                    border: firstNameHasError ? "1px solid #ff0033" : "none",
                    marginBottom: firstNameHasError ? "1%" : "4%",
                  }}
                  type="text"
                  id="firstName"
                  value={enteredFirstName}
                  onChange={firstNameChangedHandler}
                  onBlur={firstNameBlurHandler}
                />
                {firstNameHasError && <p>First name field cannot be empty</p>}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                  style={{
                    border: lastNameHasError ? "1px solid #ff0033" : "none",
                    marginBottom: lastNameHasError ? "1%" : "4%",
                  }}
                  type="text"
                  id="lastName"
                  value={enteredLastName}
                  onChange={lastNameChangedHandler}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameHasError && <p>Last name field cannot be empty</p>}
              </div>
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
                  value={enteredEmail}
                  onChange={emailChangedHandler}
                  onBlur={emailBlurHandler}
                />
                {emailInputHasError && <p>input not a valid email</p>}
              </div>
              <div className={classes.registerEmail}>
                <label htmlFor="password">Password</label>

                <input
                  style={{
                    border: passwordInputHasError
                      ? "1px solid #ff0033"
                      : "none",
                    marginBottom: "1%",
                  }}
                  type="password"
                  id="password"
                  value={enteredPassword}
                  onChange={passwordChangedHandler}
                  onBlur={passwordBlurHandler}
                />
                {passwordInputHasError && (
                  <p>entered password is not a valid password</p>
                )}
              </div>
              <div className={classes.registerEmail}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  style={{
                    border: confirmPasswordInputHasError
                      ? "1px solid #ff0033"
                      : "none",
                  }}
                  type="password"
                  id="confirmPassword"
                  value={enteredConfirmPassword}
                  onChange={confirmPasswordChangedHandler}
                  onBlur={confirmPasswordBlurHandler}
                />
                {confirmPasswordInputHasError && (
                  <p>Confirmed password does not match password</p>
                )}
              </div>
            </div>
            <button
              className={classes.registerButton}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </RegisterModal>
  );
};

export default Register;
