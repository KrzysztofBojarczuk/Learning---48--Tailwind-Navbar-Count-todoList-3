import './App.css';
import About from './components/About';
import Count from './components/Count';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
         <Navbar />

       <Switch>
         <Route path="/about" component={About} exact/>
         <Route path="/count" component={Count} exact/>
         <Route path="/todolist" component={Todolist} exact/>

       </Switch>
       </Router>
</div>
  );
}

export default App;
