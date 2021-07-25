import './App.css';
import Home from '../src/components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Personal from './components/Personal/Personal'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/personal" component={Personal} />
    </Switch>
  );
}

export default App;
