// Translation
import {useTranslation} from 'react-i18next'

// Css
import "./Home.css"

// Animation
import {motion } from "framer-motion"


const About = () =>{
  const {t} = useTranslation()
  return(
    <header id="header" >
    <motion.div initial={{x:"-100vw"}} animate={{x:0}} transition={{delay:0.2, duration:3}} className="logo" style= {{backgroundImage: "url('./assests/about/me.jpg')"}}>
    </motion.div>
    <motion.div className="content"  initial={{height:0}} animate={{height:"auto"}} transition={{delay:0.5, duration:2}} >
      <div className="inner">
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:2}}>MAMMASSE Amine</motion.h1>
        <motion.h4  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:2}}>Full Stack Web Developer</motion.h4> 
        <motion.p  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2, duration:2}}>{t("Hi There My name is Amine and i'm experienced web Developer I develop awesome looking and responsive websites,with integrated APIs And custom plugins. I excel at helping clients turn their ideas into reality, So lets have great time bulding our websites dreames togather")}</motion.p>
      </div>
    </motion.div>
    <article>
      <ul>
        <li ><a href="portfolio/assests/about/cv.pdf" className="btn" download   >{t("CV")}</a></li>



      </ul>
    </article>
  </header>



  )
}

export default About;