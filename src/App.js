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
//import About from "./screens/About"
import Home from "./screens/Home"

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
                <Home/>
                <Route exact path="/about"  />
                <Route exact path="/experiance" />
                <Route exact path="/skills" />
                <Route exact path="/works" />
                <Route exact path="/services" />
                <Route exact path="/contact" />
                <Route exact path="/certificate" />
              </Layout>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
