//import logo from './logo.svg';
//import './App.css';
import { Router, Route } from "react-router";

import history from "./history";
import CallList from './components/CallList';
import CallInUse from "./components/CallInUse";

function App() {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={CallList}></Route>
        <Route path="/call/:id" exact component={CallInUse}></Route>
      </Router>
    </div>
  );
}

export default App;
