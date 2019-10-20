import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CommonHeader from './components/CommonHeader';
import Home from './containers/Home';
import About from './containers/About';

function App() {
  return (
    <Router>
      <CommonHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/:id" component={About} />
      </Switch>
    </Router>
  );
}
export default App;
