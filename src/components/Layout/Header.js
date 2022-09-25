import classes from "./Header.module.css";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const logoutHandler = (event) => {
    localStorage.clear();
    props.onLogout();
    navigate("/");
  };
  const isLoggedInOption = (
    <div>
      <button>support</button>
      <button onClick={logoutHandler}>Logout</button>
      <button>Settings</button>
    </div>
  );

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Crypto</h1>
        {props.isLoggedIn ? (
          isLoggedInOption
        ) : (
          <div>
            <button>support</button>
            <button onClick={props.onShowLogin}>login</button>
            <button
              style={{
                backgroundColor: "#E7B400E5",
                padding: "3%",
                borderRadius: "7px",
              }}
              onClick={props.onShowRegister}
            >
              Register
            </button>
          </div>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
