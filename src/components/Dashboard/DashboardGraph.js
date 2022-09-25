import React from "react";
import classes from "./DashboardGraph.module.css";
import Carousel from "react-material-ui-carousel";
import Chart from "../../assets/images/Chart.png";
import ChartTwo from "../../assets/images/Chart_2.png";
import ChartThree from "../../assets/images/Chart_3.png";
import { Paper} from "@mui/material";

const DashboardGraph = () => {
  var items = [
    {
      id: 1,
      name: "BNB",
      amount_owned: 0.0000881047,
      price: "30,000",
      change: -1.77,
      image: Chart,
    },
    {
      id: 2,
      name: "BUSD",
      amount_owned: 18.59,
      price: "10,00",
      change: -1.77,
      image: ChartTwo,
    },
    {
      id: 3,
      name: "Ethereum",
      amount_owned: 0.000002,
      price: "39,000",
      change: -0.82,
      image: ChartThree
    },
    {
      id: 4,
      name: "Rupiah",
      amount_owned: 50000,
      price: "0",
      change: 0,
      image: Chart,
    },
    {
      id: 5,
      name: "Galxe",
      amount_owned: 10.5,
      price: "302,242",
      change: 0.02,
      image: ChartTwo,
    },
    {
      id: 6,
      name: "SHIBA",
      amount_owned: 10000,
      price: "1,629",
      change: 0.09,
      image: ChartThree
    },
  ];

  return (
    <div>
      <h1>Charts</h1>
      <div className={classes.container}>
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

function Item(props) {
  return (
    <Paper className={classes.paper}>
      <h2>{props.item.name}</h2>
      <img src={props.item.image} style={{backgroundImage:'transparent'}} alt="" />
    </Paper>
  );
}

export default DashboardGraph;
