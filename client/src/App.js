import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from "./Main";
import New from "./components/New";
import View from "./components/View";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <New path="/new"/>
        <View path="/pirate/:pirateId"/>
        {/* <Update path="/pirate/edit/:pirateId"/> */}
      </Router>

    </div>
  );
}

export default App;
