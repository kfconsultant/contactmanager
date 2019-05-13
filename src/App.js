import React, { Component } from "react";

//BrowserRouter is not working if deploying to github, use HashRouter instead
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Param from "./components/pages/Param";
import Test from "./components/test/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/param/:id" component={Param} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
                <AddContact />
                <Contacts />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
