import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import classes from "./DashboardTable.module.css";

const DUMMY_DATE = [
  {
    id: 1,
    name: "BNB",
    amount_owned: 0.0000881047,
    price: "30,000",
    change: -1.77,
  },
  {
    id: 2,
    name: "BUSD",
    amount_owned: 18.59,
    price: "10,00",
    change: -1.77,
  },
  {
    id: 3,
    name: "Ethereum",
    amount_owned: 0.000002,
    price: "39,000",
    change: -0.82,
  },
  {
    id: 4,
    name: "Rupiah",
    amount_owned: 50000,
    price: "0",
    change: 0,
  },
  {
    id: 5,
    name: "Galxe",
    amount_owned: 10.5,
    price: "302,242",
    change: 0.02,
  },
  {
    id: 6,
    name: "SHIBA",
    amount_owned: 10000,
    price: "1,629",
    change: 0.09,
  },
];

const DashboardTable = () => {
  const rowStyleTitle = {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    border: "none",
    fontSize: "32px",
  };

  const rowStyle = {
    color: "white",
    textAlign: "center",
    border: "none",
    fontWeight: "300",
    fontSize: "20px",
  };

  const rowBottom = {
    border: "none",
  };

  return (
    <div className={classes.dashboardTable}>
      <h2>My Crypto Holdings</h2>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "transparent",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Table
          style={{
            fontColor: "white",
            color: "white",
            border: "none",
            margin: "0px",
          }}
        >
          <TableHead sx={rowBottom}>
            <TableRow sx={rowBottom}>
              <TableCell sx={rowStyleTitle}>Name</TableCell>
              <TableCell sx={rowStyleTitle}>Amount Owned</TableCell>
              <TableCell sx={rowStyleTitle}>Price</TableCell>
              <TableCell sx={rowStyleTitle}>Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DUMMY_DATE.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={rowStyle}>{row.name}</TableCell>
                <TableCell sx={rowStyle}>{row.amount_owned}</TableCell>
                <TableCell sx={rowStyle}>{row.price}</TableCell>
                <TableCell
                  sx={{
                    color: row.change > 0 ? "#1BCC4D" : "red",
                    textAlign: "center",
                    border: "none",
                    marginBottom: "1px",
                    fontSize: "16px",
                  }}
                >
                  {row.change > 0 ?"+":''}{row.change}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashboardTable;
