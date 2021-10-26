import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon'; 
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



// Icons
import { FaMapMarkedAlt,FaFacebookF,FaViber } from "react-icons/fa";
import { MdAlternateEmail,MdPhoneAndroid,MdSend } from "react-icons/md";
import { BsInstagram,BsWhatsapp,BsLinkedin} from "react-icons/bs";

// Css
import "./Contact.css";

// Translation
import {useTranslation} from 'react-i18next'



const Contact = ()=>{

  const {t} = useTranslation()

  return(

    <Container id="contact" component="div">
      <Paper className="contactInfo" >
        <div>
        <Typography variant="h5">{t("Contact Info")}</Typography>
          <List sx={{ml: -2}} className="infos">
            <ListItem disablePadding sx={{mb: 2}}>
              <ListItemIcon>
                <FaMapMarkedAlt/>
              </ListItemIcon>
              <ListItemText primary={`Cité 100Logts Akal Aberkan El-Kseur Bejaia`}/>
              </ListItem>
        
            <ListItem disablePadding sx={{mb: 2}}>
              <ListItemIcon>
                <MdAlternateEmail/>
              </ListItemIcon>
              <ListItemText primary={`aminemammasse98@gmail.com`}/>
            </ListItem>
   
            <ListItem disablePadding sx={{mb: 2}}>
              <ListItemIcon>
                <MdPhoneAndroid/>
              </ListItemIcon>
              <ListItemText primary="05 54 55 17 10"/>
            </ListItem>
          </List>
          </div>
          <div>
            <List className="socialMedia">
              
                <ListItemButton component="a" href="https://www.facebook.com/amine.davide.96" target="_blank">
                  <ListItemIcon>
                  <FaFacebookF/>
                  </ListItemIcon>
                </ListItemButton>



                <ListItemButton component="a"  href="https://www.instagram.com/golden.d.amine/" target="_blank">
                  <ListItemIcon>
                  <BsInstagram/>
                  </ListItemIcon>
                </ListItemButton>


                <ListItemButton  component="a"  href=" https://wa.me/+213554551710" target="_blank">
                  <ListItemIcon>
                  <BsWhatsapp/>
                  </ListItemIcon>
                </ListItemButton>



                <ListItemButton component="a"  href="https://www.linkedin.com/in/aminemammasse/" target="_blank">
                  <ListItemIcon>
                  <BsLinkedin/>
                  </ListItemIcon>
                </ListItemButton>

                <ListItemButton component="a"  href="viber://chat?number=+213554551710" target="_blank">
                  <ListItemIcon>
                  <FaViber/>
                  </ListItemIcon>
                </ListItemButton>

            </List>
          </div>
      </Paper>
      <Box className="contactForm">
        <h2>{t("Touch")}</h2>
          <div className="formBox">
              <div className="inputBox w50">
              <TextField type="text" label={t("First Name")} variant="standard" required fullWidth/>
              </div>
              <div className="inputBox w50">
              <TextField type="text" label={t("Last Name")} variant="standard" required fullWidth/>
              </div>
              <div className="inputBox w50">
              <TextField  type="email" label={t("Email")} variant="standard" required fullWidth/>
              </div>
              <div className="inputBox w50">
              <TextField  type="text" label={t("Mobile Number")}variant="standard" fullWidth/>
              </div>

              <div className="inputBox w100">
              <TextField label={t("Your Message Here")} rows={4} multiline  variant="standard" required className="textarea"/>
              </div> 
              <Button type="submit" variant="contained" endIcon={<MdSend />}>{t("Send")} </Button>
            </div>
      </Box>


    </Container>
 
  )
 
}

export default Contact;