import classes from "./Header.module.css";
import { Fragment } from "react";
import Register from "../Authentication/Register";

const Header = (props) => {
  return (
    <Fragment>

      <header className={classes.header}>
        <h1>NVMC Service</h1>
        <div>
          <button>support</button>
          <button>login</button>
          <button onClick={props.onShowRegister}>Register</button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
