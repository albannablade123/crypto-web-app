import React from "react";
import { Fragment } from "react";
import LandingPageImg from "../../assets/images/background_image.jpg";
import classes from "./LandingPage.module.css";
import CtaButton from "./CtaButton";
import PopularCryptocurrencies from "../LandingPage/PopularCryptocurrencies";
import BenefitsSection from "../LandingPage/BenefitsSection";
const LandingPageImage = () => {
  return (
    <Fragment className={classes.landingImage}>
      <img src={LandingPageImg} className={classes.landingImage} alt="" />
      <h1 className={classes.centered}>
        Manage and Grow Your Crypto Wallet within a secure platform. Join the
        blockchain today
      </h1>
      <div className={classes.right}>
        <button >Register Now</button>
      </div>
      <PopularCryptocurrencies/>
      <BenefitsSection/>

    </Fragment>
  );
};

export default LandingPageImage;
