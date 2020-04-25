import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import TenantFeedback from './components/TenantSearch/TenantSearch';

import 'bootstrap/dist/css/bootstrap.css';
import Notfound from './components/Notfound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feedback from './components/Feedback/Feedback';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route
            exact
            strict
            path="/TenantFeedback"
            component={TenantFeedback}
          />
          <Route exact strict path="/LandlordFeedback" component={Feedback} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
