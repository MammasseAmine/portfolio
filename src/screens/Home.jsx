// Translation
import {useTranslation} from 'react-i18next'

// Css
import "./Home.css"

const About = () =>{
  const {t} = useTranslation()
  return(
    
    <header id="header">
    <div className="logo" style= {{backgroundImage: "url('./assests/about/me.jpg')"}}>
    </div>
    <div className="content">
      <div className="inner">
        <h1>MAMMASSE Amine</h1>
        <h4>Full Stack Web Developer</h4> 
        <p>{t("Home_description")}</p>
      </div>
    </div>
    <article>
      <ul>
        <li><a href="portfolio/assests/about/cv.pdf" className="btn" download>{t("CV")}</a></li>



      </ul>
    </article>
  </header>

  )
}

export default About;