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

// Form Validation
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"

const Contact = ()=>{

  const {t} = useTranslation();

  const initialValues = {Fname : "", Lname : "", Email : "", Mobile : "", Msg : ""};

  const validationSchema = Yup.object().shape({
    Fname: Yup.string().required(t("rqFname")).matches(/^[^0-9]+$/, t("strFname")).min(3,t("minFname")),
    Lname : Yup.string().required(t("rqLname")).matches(/^[^0-9]+$/, t("strLname")).min(3,t("minLname")),
    Email : Yup.string().email(t("Vemail")).required(t("rqEmail")),
    Mobile : Yup.number(t("Vmobile")).positive(t("Vmobile")).integer(t("Vmobile")).min(100000000,t("Vmobile")),
    Msg : Yup.string().required(t("rqMsg")).min(10,t("Vmsg"))
  }) 

  const onSubmit = (values,props)=>{
    alert(JSON.stringify(values), null,2);
    props.resetForm()
  }

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
        
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props)=>( 

              <Form >
                  <div className="formBox">
                  <div className="inputBox w50">
                  <Field as={TextField} name="Fname" type="text" label={t("First Name")} variant="standard"  fullWidth helperText={<ErrorMessage name="Fname"/>} required error={props.errors.Fname && props.touched.Fname}  />
                  </div>
                  <div className="inputBox w50">
                  <Field as={TextField} type="text" name="Lname" label={t("Last Name")} variant="standard"  fullWidth  helperText={<ErrorMessage name="Lname"/>} required error={props.errors.Lname && props.touched.Lname}/>
                  </div>
                  <div className="inputBox w50">
                  <Field as={TextField} name="Email" type="email" label={t("Email")} variant="standard"  fullWidth  helperText={<ErrorMessage name="Email"/>} required error={props.errors.Email && props.touched.Email} />
                  </div>
                  <div className="inputBox w50">
                  <Field as={TextField} name="Mobile"  type="text" label={t("Mobile Number")}variant="standard" fullWidth helperText={<ErrorMessage name="Mobile"/>} error={props.errors.Mobile && props.touched.Mobile} />
                  </div>

                  <div className="inputBox w100">
                  <Field as={TextField} name="Msg" label={t("Your Message Here")} rows={3} multiline  variant="standard"  className="textarea" helperText={<ErrorMessage name="Msg"/>} required error={props.errors.Msg && props.touched.Msg}/>
                  </div> 
                  <Button sx={{mt:-3}} type="submit" variant="contained" endIcon={<MdSend />}>{t("Send")} </Button>
                </div>
              </Form>

            )}
          </Formik>
      </Box>


    </Container>
 
  )
 
}

export default Contact;