
import NavBar from "../components/navBar/NavBar"
import SelectLanguage from "../components/selectLanguage/SelectLanguage"

//import Darkmode from 'darkmode-js';


// Css
import "./Layout.css"

const Layout = (props) =>{

return(
  <>
      
        <div className="row">
        <SelectLanguage/>
          <NavBar/>
            {props.children}
        </div>

  </>
)
}

export default Layout;