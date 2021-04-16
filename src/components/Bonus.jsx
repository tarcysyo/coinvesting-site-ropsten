import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';

function Bonus(){
  let bonus;  
  let date2 = new Date("04/11/2021").toLocaleDateString();
  let date3 = new Date("04/12/2021").toLocaleDateString();
  let date4 = new Date("04/13/2021").toLocaleDateString();
  let date= new Date().toLocaleDateString();
  let end = false;

  if(date <= date2){
    date = date2;
    bonus = "50%";
  }
  else if(date <= date3){
    date = date3;
    bonus = "35%";
  }
  else if(date <= date4){
    date = date4;
    bonus = "20%";
  }
  else {
    end = true;
    bonus = "5%";
  }

  if (end === false){
    return (
      <div className="d-none d-md-block" >
        <Toast style={{position: "absolute", botton: 0, left: 0, backgroundColor: "black", color: "#ffcc00", width: "250px"}}>
          <Toast.Body style={{backgroundColor: "#090909"}}>
              <h5 className="text-center"><strong>Lançamento</strong></h5>
              <p className="text-center" style={{fontSize: "13px"}}>Compre até <Badge variant="danger" style={{fontSize: "15px"}}>{date}</Badge> e ganhe</p>
              <p className="text-center"><Badge variant="danger" style={{fontSize: "37px"}}>{bonus}</Badge> de <strong>BÔNUS!</strong></p>          
          </Toast.Body>    
        </Toast>
      </div>    
    );
  } 
  else {
    return(
      <div className="d-none d-md-block" >
        <Toast style={{position: "absolute", botton: 0, left: 0, backgroundColor: "black", color: "#ffcc00", width: "250px"}}>
          <Toast.Body style={{backgroundColor: "#090909"}}>
              <h5 className="text-center"><strong>Bônus</strong></h5>
              <p className="text-center" style={{fontSize: "21px"}}>Compre agora e receba</p>
              <p> um <Badge variant="danger" style={{fontSize: "25px"}}>Bônus</Badge> de <Badge variant="danger" style={{fontSize: "31px"}}>{bonus}</Badge> .</p>          
          </Toast.Body>    
        </Toast>
      </div>
    );
  }
}

export default Bonus;
