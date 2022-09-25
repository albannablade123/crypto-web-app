import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.mainFooter}>
      <div className={classes.container}>
        <div className={classes.row}>
          {/* col1 */}
          <div className={classes.col}>
            <h4>About</h4>
            <h5>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
              <li>Cryptocurrency</li>
            </h5>
          </div>
          {/* col2 */}
          <div className={classes.col}>
            <h4>Product</h4>
            <h5>
              <li>Financial Tools</li>
              <li>Index</li>
              <li>Graphing</li>
              <li>More</li>
            </h5>
          </div>
          {/* col3 */}
          <div className={classes.col}>
            <h4>Learn More</h4>
            <h5>
              <li>Our Product</li>
              <li>License</li>
              <li>Supported Crypto</li>
              <li>About</li>
            </h5>
          </div>
          {/* col4 */}
          <div className={classes.col}>
            <h4>Services</h4>
            <h5>
              <li>Employees</li>
              <li>New Services</li>
              <li>Contact</li>
            </h5>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} Crypto-web-app| All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
};

export default Footer;
