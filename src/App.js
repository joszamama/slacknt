import React from 'react';
import './includes/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        {/* React router allow us to have different pages into our website*/}
        <Router>

          <Switch>
            <Route path="/" exact>
              <h1> This is the homepage</h1>
            </Route>
          </Switch>

        </Router>
      </header>
    </div>
  );
}

export default App;
