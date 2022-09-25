import React from "react";
import classes from "./BenefitCard.module.css";

const BenefitCard = (props) => {
  return (
    <div className={classes.benefit}>
      
      <img src={props.image} alt="" />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default BenefitCard;
