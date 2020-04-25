import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import TenantFeedback from "./components/TenantFeedback/TenantFeedback";
import LandlordFeedback from "./components/LandlordFeedback/LandlordFeedback";
import "bootstrap/dist/css/bootstrap.css";
import Notfound from './components/Notfound'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route exact strict path="/TenantFeedback" component={TenantFeedback} />
          <Route exact strict path="/LandlordFeedback" component={LandlordFeedback} />
          <Route  component={Notfound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
