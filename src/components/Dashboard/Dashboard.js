import React from "react";
import classes from './Dashboard.module.css'
import UserCard from "./UserCard";
import UserWallet from "./UserWallet";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  return (
    <div className={classes.profile}>
      <h1>Dashboard</h1>
      <UserCard/>
      <UserWallet/>
      <DashboardTable/>
    </div>
  );
};

export default Dashboard;
