import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SigninPage from './pages/signin';
import SignupPage from './pages/signup';

function App() {
  return (
    <Router>
      <Switch>        
        <Route path = '/' component = {SigninPage} exact />
        <Route path = '/signup' component = {SignupPage} exact />
      </Switch>      
    </Router>
  );
}

export default App;
