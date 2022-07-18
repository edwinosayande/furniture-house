import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import arrow from "../images/arrow.png";
import wdchair from "../images/wdchair.png";
import sillon from "../images/sillon.jpg";
import tree from "../images/tree.png";

function Secondsection() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>
        <div style={{ display:"flex" }}>
    <Box style={{ width: "300px", marginLeft: "40px", marginTop: "20px", padding: "0px 0px 0px 0px" }}>
        <h2>Why We Are<br></br> Best In Our <br></br>Town</h2>
        
        <p>We have 5000+ reviews and our customers trust on
            our furniture and quality products. If you oder more than $500
            we can deliver from like express delivery.
        </p>
        <br></br>
        <img src={arrow} alt="arrow"  style={{ width: "50px", marginLeft: "30px"}}/>
    </Box>
    <Box  style={{ width: "300px", padding: "0px 0px 0px 0px" }}>
    <img src={wdchair} alt="wdchair"  style={{ width: "250px", justifyContent: "center",
     marginTop: "60px", marginLeft: "10px" }}/>
    <br></br>
     <p style={{textAlign:"center"}}>Green Chair<br></br> With Metal</p>
     <p style={{textAlign:"center", fontWeight: "bold"}}>$36</p>
    </Box>
    <Box  style={{ width: "300px", padding: "0px 0px 0px 0px" }}>
    <img src={sillon} alt="sillon"  style={{ width: "250px", justifyContent: "center",
     marginTop: "60px", marginLeft: "10px"}}/>
    <br></br>
     <p style={{textAlign:"center"}}>Sagoara with<br></br>Wooden Stand</p>
     <p style={{textAlign:"center", fontWeight: "bold"}}>$20</p>
    </Box>
    <Box  style={{ width: "300px", padding: "0px 0px 0px 0px" }}>
    <img src={tree} alt="tree"  style={{ width: "250px", justifyContent: "center",
     marginTop: "60px", marginLeft: "10px" }}/>
    <br></br>
     <p style={{textAlign:"center"}}>Corn Tree With<br></br> Wooden Rook</p>
     <p style={{textAlign:"center", fontWeight: "bold"}}>$10</p>
    </Box >
    </div>
    </Container>
  </React.Fragment>
  )
}
export default Secondsection