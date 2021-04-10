import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';

function Bonus(){
  let bonus;  
  let date2 = new Date("04/12/2021").toLocaleDateString();
  let date3 = new Date("04/13/2021").toLocaleDateString();
  let date4 = new Date("04/14/2021").toLocaleDateString();
  let date= new Date().toLocaleDateString();
  let end = false;

  if(date <= date2){
    date = date2;
    bonus = "50%"
  }
  else if(date <= date3){
    date = date3;
    bonus = "35%"
  }
  else if(date <= date4){
    date = date4;
    bonus = "20%"
  }
  else {
    end = true;
  }

  if (end === false){
    return (
      <div /* className="d-none d-md-block" */>
        <Toast style={{position: "absolute", botton: 0, left: 0, backgroundColor: "black", color: "#ffcc00", width: "225px"}}>
          <Toast.Body style={{backgroundColor: "#090909"}}>
            <h5 className="text-center"><strong>PROMOÇÃO</strong></h5>             
              <h6 className="text-center">Compre até <Badge variant="danger">{date}</Badge></h6>      
              <h6 className="text-center">e ganhe <Badge variant="danger" style={{fontSize: "21px"}}>{bonus}</Badge></h6>  
              <h6 className="text-center">de BÔNUS!</h6>            
          </Toast.Body>    
        </Toast>
      </div>    
    );
  } 
  else {
    return(null);
  }
}

export default Bonus;
