//  Screens
import Layout from "./screens/Layout";

// React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Css
import './App.css';

// SEO
import {Helmet} from "react-helmet"

// Translation
import {useTranslation} from 'react-i18next'

// Components
import About from "./screens/About"
import Home from "./screens/Home"
import Contact from "./screens/Contact"

function App() {

  const {t} = useTranslation()
  return (
    <div className="App">
      <Helmet>
        <title>{t("Home")}</title>
      </Helmet>
       <Router>
            <Switch>
              <Layout>
                {/* <Home/> */}
                <Route exact path={["/portfolio", "/"] } component={Home}/>
                <Route exact path="/about"  component={About}/>
                <Route exact path="/experiance" />
                <Route exact path="/skills" />
                <Route exact path="/works" />
                <Route exact path="/services" />
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/certificate" />
              </Layout>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
