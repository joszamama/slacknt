import React from 'react';
import './includes/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './includes/components/Header'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        {/* React router allow us to have different pages into our website*/}
        <Router>

          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
          </Switch>

        </Router>
      </header>
    </div>
  );
}

export default App;
