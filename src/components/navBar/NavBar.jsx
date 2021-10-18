import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// React Icons
import { FaHouseUser,FaAddressCard,FaBriefcase, FaHandshake,FaLaptopCode,FaPhoneVolume } from "react-icons/fa";

// React
import {useHistory, useLocation} from "react-router-dom"

// Css
import "./NavBar.css"

const NavBar = () =>{

  const navItems = [
    {text : "Home",icon : <FaHouseUser/> ,path : "/"},
    {text : "About Me",icon : <FaAddressCard/>,path : "/about"},
    {text : "Experience",icon : <FaBriefcase/>,path : "/experiance"},
    {text : "Skills",icon : <FaHouseUser/>,path : "/skills"},
    {text : "Works",icon : <FaLaptopCode/>,path : "/works"},
    {text : "Services",icon : <FaHandshake/>,path : "/services"},
    {text : "Contact",icon : <FaPhoneVolume />,path : "/contact"},
  ]

  const history = useHistory();
  const location = useLocation();
  return(
    <nav>
      <Drawer className="drawer" variant='permanent' anchor="left">
        <List>
            {navItems.map(item=>(
                <ListItem key={item.text} button onClick={()=> history.push(item.path)} className= {location.pathname == item.path ? "active" : null} >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItem>
            ))}
        </List>
      </Drawer>
    </nav>
  )
}

export default NavBar;