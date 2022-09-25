import React from "react";
import RegisterModal from "../UI/RegisterModal";
import classes from "./Register.module.css";

const Register = (props) => {
  return (
    <RegisterModal onClose={props.onCloseRegister}>
      <div className={classes.registerModal}>
        <form>
            <h1>Create a Free Account</h1>
          <div>
            <div className={classes.nameDiv}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="name" />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="name" />
            </div>
          </div>
          <div>
            <label htmlFor="street">Email</label>
            <br />
            <input type="text" id="street" />
          </div>
          <div>
            <label htmlFor="postal">Password</label>
            <br />
            <input type="text" id="postal" />
          </div>
        </form>
        <button onClick={props.onCloseRegister}>Close</button>
      </div>
    </RegisterModal>
  );
};

export default Register;
