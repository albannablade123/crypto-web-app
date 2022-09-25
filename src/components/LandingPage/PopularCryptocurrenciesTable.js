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
    name: "Hertha",
    last_price: 10,
    change: "hoshea0@umn.edu",
    market_cap: "Female",
  },
  {
    id: 2,
    name: "Orin",
    last_price: 83,
    change: "opettie1@freewebs.com",
    market_cap: "Male",
  },
  {
    id: 3,
    name: "Rosemonde",
    last_price: 36,
    change: "rfuncheon2@hp.com",
    market_cap: "Female",
  },
  {
    id: 4,
    name: "Pris",
    last_price: 44,
    change: "pcoley3@google.ru",
    market_cap: "Female",
  },
  {
    id: 5,
    name: "Tessa",
    last_price: 51,
    change: "tmacane4@economist.com",
    market_cap: "Female",
  },
];

const PopularCryptocurrenciesTable = () => {
    const divStyle = ({
        margin: "auto",
        fontColor: "white",
      });


      const rowStyleTitle = ({
        color: 'white',
        fontWeight: '700',
        textAlign: "center",
        border: 'none',
      })

      const rowStyle = ({
        color: 'white',
        textAlign: "center",
        border: 'none',
      })

      const rowBottom = ({
        border: 'none',
       
      })

      
  return (
    <div style={divStyle}>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "#190250",
          color: "white",
          width: "90%",
          textAlign: "center",
          boxShadow: '8px 8px 40px 0px #00000040',
          
        }}
      >
        <Table style={{ fontColor: 'white', color: 'white', border: 'none'}}>
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
                <TableCell sx={rowStyle}>{row.name}</TableCell>
                <TableCell sx={rowStyle}>{row.last_price}</TableCell>
                <TableCell sx={rowStyle}>{row.change}</TableCell>
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
