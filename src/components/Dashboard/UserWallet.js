import React from "react";
import classes from "./UserWallet.module.css";
import CircularGraph from "../../assets/images/circular_graph.png";

const UserWallet = () => {

  return (
    <div className={classes.myBalance}>
      <div>
        <h2>My Balance</h2>
        <h3>0.00021435 BTC ≈ Rp 60,178.00</h3>
        <h3>Week net gain : 10%</h3>
        <div className={classes.myButton}>
          <button>Deposit</button>
          <button>Withdraw</button>
          <button>Check Market</button>
        </div>
      </div>

      <img src={CircularGraph} alt="" />
      <div className={classes.identifier}>
        <div style={{display: 'flex'}}>
          <div style={{ width: "36px", height: "36px", backgroundColor: "#0E0079", marginRight: "3%", marginBottom: "10%"}}/>
          <h6>Fiat and Spot</h6>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{ width: "36px", height: "36px", backgroundColor: "#1A00DB", marginRight: "3%" }}/>
          <h6>Futures</h6>
        </div>
      </div>
    </div>
  );
};

export default UserWallet;
