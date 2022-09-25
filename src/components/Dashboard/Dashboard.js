import React from "react";
import classes from './Dashboard.module.css'
import UserCard from "./UserCard";
import UserWallet from "./UserWallet";
import DashboardTable from "./DashboardTable";
import DashboardGraph from "./DashboardGraph";
import { useEffect } from "react";

const Dashboard = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (props.isLoggedIn === false) {
    return(
      <div className={classes.unauthorized}>
        <h1>401 Error: Unauthorized Access</h1>
        <br />
        <h1>Try Logging In Again</h1>
      </div>
    )
  }
  return (
    <div className={classes.profile}>
      <h1>Dashboard</h1>
      <UserCard/>
      <UserWallet/>
      <DashboardTable/>
      <DashboardGraph/>
    </div>
  );
};

export default Dashboard;
