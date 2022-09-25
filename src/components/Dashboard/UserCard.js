import React from "react";
import classes from "./UserCard.module.css";
import AccountImage from "../../assets/images/account_circle.png";

const UserCard = () => {
  return (
    <div className={classes.userCard}>
      <img src={AccountImage} alt="" />
      <div>
        <h2>Anonymous user</h2>
        <div className={classes.userStats}>
            <div>
                <h4>
                  UserType: 
                </h4>
                <h5>
                    Regular
                </h5>
            </div>
            <div>
                <h4>
                  UserID:
                </h4>
                <h5>
                a3004132123
                </h5>
            </div>
            <div>
                <h4>
                    Member Since: 
                </h4>
                <h5>
                    21/05/2020
                </h5>
            </div>
            <div>
                <h4>
                    Last Transaction: 
                </h4>
                <h5>
                    21/08/2022
                </h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
