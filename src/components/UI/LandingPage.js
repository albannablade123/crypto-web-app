import React,{ useEffect } from "react";
import { Fragment } from "react";
import LandingPageImg from "../../assets/images/background_image.jpg";
import classes from "./LandingPage.module.css";
import PopularCryptocurrencies from "../LandingPage/PopularCryptocurrencies";
import BenefitsSection from "../LandingPage/BenefitsSection";
const LandingPageImage = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Fragment className={classes.landingImage}>
      <img src={LandingPageImg} className={classes.landingImage} alt="" />
      <h1 className={classes.centered}>
        Manage and Grow Your Crypto Wallet within a secure platform. Join the
        blockchain today
      </h1>
      <div className={classes.right}>
        <button onClick={props.onShowRegister}>Register Now</button>
      </div>
      <PopularCryptocurrencies onShowRegister={props.onShowRegister} />
      <BenefitsSection />
    </Fragment>
  );
};

export default LandingPageImage;
