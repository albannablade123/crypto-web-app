import React from "react";
import classes from "./BenefitsSection.module.css";
import BenefitCard from "../UI/BenefitCard";
import benefitOne from "../../assets/images/benefit_one.png"
import benefitTwo from "../../assets/images/benefit_two.png"
import benefitThree from "../../assets/images/benefit_three.png"
import benefitFour from "../../assets/images/benefit_four.png"
import benefitFive from "../../assets/images/benefit_four.png"

const DUMMY_DATA = [
  {
    id: 1,
    title: "Secure and Safe Platform",
    description:
      "Security is our number one priority, all user data and transaction are stored in server with multiple encryptions. ",
    image: benefitOne,
  },
  {
    id: 2,
    title: "Easy Access",
    description:
      "New to crypto? our financial platforms are easy and simple to use, wih each design aimed with consumer accessibility in mind.",
    image: benefitTwo,
  },
  {
    id: 3,
    title: "24h Support",
    description:
      "Our team are working 24 hours to ensure that the service provided is upto the standards",
    image: benefitThree,
  },
  {
    id: 4,
    title: "Responsive and Userfriendly Design",
    description: "Our webpage is user centric that prioritize user friendly UI",
    image:  benefitFour,
  },
  {
    id: 5,
    title: "Latest and up to date data",
    description: "Keep track of price changes accurate to micoseconds.",
    image: benefitFive,
  },
];

const BenefitsSection = () => {
  return (
    <div className={classes.benefits}>
      <h1>Why us?</h1>
      <div className={classes.benefits_row}>
        {DUMMY_DATA.slice(0, 3).map((item) => (
          <BenefitCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className={classes.benefits_row_two}>
      {DUMMY_DATA.slice(3, 5).map((item) => (
          <BenefitCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
