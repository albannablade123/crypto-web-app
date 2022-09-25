import React from "react";
import classes from "./BenefitCard.module.css";
import BenefitImage from "../../assets/images/benefit_one.png"

const BenefitCard = () => {
  return (
    <div className={classes.benefit}>
      
      <img src={BenefitImage} alt="" />
      <h4>BenefitCard</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nam tenetur sed tempore quaerat labore temporibus eveniet adipisci at nihil harum natus soluta, veritatis officiis odio quasi. Ratione, ipsum impedit.</p>
    </div>
  );
};

export default BenefitCard;
