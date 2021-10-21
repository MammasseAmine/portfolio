import {useState}  from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Flag Icons
import 'flag-icon-css/css/flag-icon.min.css'

// React Icons
import { FaGlobeEurope} from "react-icons/fa";

// Translation
import i18next from 'i18next'

// Animation
import {motion } from "framer-motion"

const SelectLanguage = () =>{

  const Languages = [
    {code:"en", name:"English", country_code : "gb"},
    {code:"fr", name:"Francais", country_code : "fr"}
  ]


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



 
  return(
    <motion.div id="Languages"   whileHover={{scale:1.2}}>
       <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      
      >
        <FaGlobeEurope/> 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{'aria-labelledby': 'basic-button'}}
      >
      {Languages.map(({code,name,country_code})=>(
      
        
        <MenuItem key={code} onClick={()=>{handleClose(); i18next.changeLanguage(code)}}>
        <span className={`flag-icon flag-icon-${country_code}`}></span>
        &nbsp; &nbsp;{name}</MenuItem>
   
      ))}
       

      </Menu>
    </motion.div>
  )
}


export default SelectLanguage;