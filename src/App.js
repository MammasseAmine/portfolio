// components
import NavBar from "./components/navBar/NavBar"

// React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Css
import './App.css';

function App() {

  return (
    <div className="App">
       <Router>
        <NavBar>
          <Switch>
            <Route exact path="/"/>
            <Route exact path="/about" />
            <Route exact path="/experiance" />
            <Route exact path="/skills" />
            <Route exact path="/works" />
            <Route exact path="/services" />
            <Route exact path="/contact" />
          </Switch>
        </NavBar>
      </Router>
    </div>
  );
}

export default App;
