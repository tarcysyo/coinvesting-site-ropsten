import React from 'react';

import SaleForm from './SaleForm';

import logo from '../assets/logo.png';

function Middle(props) {
  return (
    <div className="text-center" style={{height: "85vh", margin: "auto"}}>
      <div className="d-none d-md-block"><img  src={logo} alt="logo" height="235px" /></div>      
      <SaleForm 
        buyTokens={props.buyTokens}
        tokensSold={props.tokensSold}
        tokenPrice={props.tokenPrice}
        tokenSale={props.tokenSale}
        tokenBalance={props.tokenBalance}
        price={props.price}
        finish={props.finish}
      />
    </div>
  );
};

export default Middle;
