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

const DUMMY_DATE = [
  {
    id: 1,
    name: "Bitcoin",
    value: "BTC",
    last_price: "287,460,659",
    change: -2.5,
    market_cap: "658,367.22B",
  },
  {
    id: 2,
    name: "Ethereum",
    value: "ETH",
    last_price: "20,172,310.38",
    change: 0.5,
    market_cap: "271,022.67B",
  },
  {
    id: 3,
    name: "Cardano",
    value: "ADA",
    last_price: "6,784.64",
    change: 5.6,
    market_cap: "231,912.86B",
  },
  {
    id: 4,
    name: "Galxe",
    value: "GAL",
    last_price: "37,775.93",
    change: -1.4,
    market_cap: "1,328.25B",
  },
  {
    id: 5,
    name: "Terra Classic",
    value: "LUNC",
    last_price: "4.338",
    change: -3.2,
    market_cap: " 9,669.83B",
  },
];

const PopularCryptocurrenciesTable = () => {
  const divStyle = {
    margin: "auto",
    fontColor: "white",
  };

  const rowStyleTitle = {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    border: "none",
  };

  const rowStyle = {
    color: "white",
    textAlign: "center",
    border: "none",
    marginBottom: "1px",
    fontSize: "16px",
  };

  const rowBottom = {
    border: "none",
  };

  return (
    <div style={divStyle}>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "#190250",
          color: "white",
          width: "90%",
          textAlign: "center",
          boxShadow: "8px 8px 40px 0px #00000040",
        }}
      >
        <Table style={{ fontColor: "white", color: "white", border: "none" }}>
          <TableHead sx={rowBottom}>
            <TableRow sx={rowBottom}>
              <TableCell sx={rowStyleTitle}>Name</TableCell>
              <TableCell sx={rowStyleTitle}>Last Price</TableCell>
              <TableCell sx={rowStyleTitle}>24 Hours Change</TableCell>
              <TableCell sx={rowStyleTitle}>Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DUMMY_DATE.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={rowStyle}>
                  {row.name}&nbsp;&nbsp;&nbsp;
                  <b style={{ color: "#7C7983", fontWeight: "300" }}>
                    {row.value}
                  </b>
                </TableCell>
                <TableCell sx={rowStyle}>Rp {row.last_price}</TableCell>
                <TableCell
                  sx={{
                    color: row.change > 0 ? "#1BCC4D" : "red",
                    textAlign: "center",
                    border: "none",
                    marginBottom: "1px",
                    fontSize: "16px",
                  }}
                >
                  {row.change}&nbsp;%
                </TableCell>
                <TableCell sx={rowStyle}>{row.market_cap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PopularCryptocurrenciesTable;
