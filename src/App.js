import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './containers/Home';
import CommonHeader from './components/CommonHeader';
import About from './containers/About';

function App() {
  return (
    <Router>
      <CommonHeader />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}
export default App;
