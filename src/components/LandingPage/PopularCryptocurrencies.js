import React from 'react';
import PopularCryptocurrenciesTable from './PopularCryptocurrenciesTable';
import classes from './PopularCryptocurrencies.module.css';

const PopularCryptocurrencies = (props) => {
  return (
    <div className={classes.crypto}>
        <h1>Popular CryptoCurrencies</h1>
        <PopularCryptocurrenciesTable/>
        <div className={classes.cta}>
        <h3>Start building your portolio today!</h3>
        <button onClick={props.onShowRegister}>
            Get Started Today
        </button>
        </div>
    </div>
  )
}

export default PopularCryptocurrencies