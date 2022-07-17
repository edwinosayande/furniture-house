import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/HeroSection.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { useNavigate } from "react-router-dom";
import frame1 from "../images/frame1.png";
import frame2 from "../images/frame2.png";
import frame3 from "../images/frame3.png";
import sit from "../images/sit.png";
import bulb from "../images/bulb.png";


function HeroSection() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  //   let navigate = useNavigate(); 
  //   const routeChange = () =>{  
  //   navigate("/Component3");
  // }
  
  return (
    <React.Fragment>
    <div className='hero-wrapper'>
    <Button style={{marginLeft: "20px",  marginTop: "40px", color: "white"}}
      >
        Fundo
      </Button>

    <Button style={{ marginLeft: "450px", marginTop: "40px", color: "white" }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Home
      </Button>

      <Button className="btn_menu" style={{marginTop: "40px", color: "white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        About Us
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu>

      <Button className="btn_menu" style={{marginTop: "40px", color: "white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Furniture
      </Button>
      <Button className="btn_menu" style={{marginTop: "40px", color: "white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Blog
      </Button>

      <Button className="btn_menu" style={{marginTop: "40px", color: "white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Contact Us
      </Button>

      <Button className="btn_menu" style={{backgroundColor: "black", color: "white", marginTop: "40px", 
      border: "0px solid", borderRadius: "30px", padding: "7px 25px", marginLeft: "50px" }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Login
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <div className="writeup" style={{ marginLeft: "30px",
    marginTop: "50px", color: "white" }}>
        <h2>Furniture that <br></br>Everyone <br></br>Loves</h2>
      
      <p style={{fontSize:"12px"}}>We have 5000 + Review and our Customers trust on our<br></br> Furniture and Quality Products</p>
      <Button className="btn_menu" style={{backgroundColor: "black", color: "white", marginTop: "40px", 
      border: "0px solid", borderRadius: "30px", padding: "7px 35px" }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Buy Now
      </Button>
      <Button className="btn_menu" style={{ color: "white", marginTop: "40px", 
      border: "1px solid", borderRadius: "30px", padding: "7px 15px", marginLeft: "10px"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        // onClick={routeChange}
      >
        Explore
      </Button>
      </div>
      <br></br><br></br><br></br><br></br>
      <div>
        <img src={frame1} alt="frame1"  style={{ width: "100px", position: "absolute", bottom: "49%", left: "65%" }}/>
        <img src={frame2} alt="frame2"  style={{ width: "100px", position: "absolute", bottom: "60%", left: "57%" }}/>
        <img src={frame3} alt="frame3"  style={{ width: "70px", position: "absolute", bottom: "44%", left: "59%" }}/>
      </div>
    </div>
    <div>
    <img src={sit} alt="sit"  style={{ width: "500px", position: "absolute", top: "67%", left: "40%" }}/>
    <img src={bulb} alt="bulb"  style={{ width: "70px", position: "absolute", top: "48%", left: "81%"}}/>
    </div>
  </React.Fragment>
  )
}
export default HeroSection;