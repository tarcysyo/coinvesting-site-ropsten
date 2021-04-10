import Toast from 'react-bootstrap/Toast';

import coinvex from '../assets/coinvex.png';
import eth from '../assets/eth-home-icon.png';

function Price(props) {
  let date2 = new Date("04/12/2021").toLocaleDateString();
  let date3 = new Date("04/13/2021").toLocaleDateString();
  let date4 = new Date("04/14/2021").toLocaleDateString();
  let date= new Date().toLocaleDateString();
  let price;

  if(date <= date2){
    date = date2;
    price = "0,01"
  }
  else if(date <= date3){
    date = date3;
    price = "0,02"
  }
  else if(date <= date4){
    date = date4;
    price = "0,03"
  }
  return (
    <div /* className="d-none d-md-block" */>
      <Toast style={{position: "absolute", botton: 0, right: 0, backgroundColor: "black", color: "#ffcc00", width: "225px"}}>
        <Toast.Body style={{backgroundColor: "#090909"}}>
        <h5 className="text-center"><strong>COTAÇÃO</strong></h5>   
        <h6><img alt="ETH" src={eth} width="22" height="35" /> <strong> {props.ETHPrice} <small>USD</small></strong> </h6>
        <h6><img alt="COINVEX" src={coinvex} width="22" height="22" /> <strong> {props.tokenPrice} <small>ETH</small></strong></h6> 
        <h6 className="text-center" style={{fontSize: "12px"}}>equivalente à <strong>US$ {price}</strong></h6> 
        </Toast.Body>    
      </Toast>
    </div>
    
  );
}

export default Price;
