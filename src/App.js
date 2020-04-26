import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import TenantSearch from './components/TenantSearch/TenantSearch';
import Notfound from './components/Notfound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feedback from './components/Feedback/Feedback';
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact strict path="/" component={Home} />
              <Route
                exact
                strict
                path="/TenantSearch"
                component={TenantSearch}
              />
              <Route
                exact
                strict
                path="/LandlordFeedback"
                component={Feedback}
              />
              <Route component={Notfound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
