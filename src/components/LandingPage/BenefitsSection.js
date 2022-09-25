import React from "react";
import classes from "./BenefitsSection.module.css";
import BenefitCard from "../UI/BenefitCard";

const BenefitsSection = () => {
  return (
    <div className={classes.benefits}>
      <h1>Why us?</h1>
      <div className={classes.benefits_row}>
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
      </div>
      <div className={classes.benefits_row_two}>
        <BenefitCard />
        <BenefitCard />
      </div>
    </div>
  );
};

export default BenefitsSection;
