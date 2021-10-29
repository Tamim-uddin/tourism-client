import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Header/Header';

import Addtours from './Pages/Addtours/Addtours';
import Footers from './Pages/Footers/Footers';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route path="/">
            <Home></Home>
         </Route>
         <Route path="/addtours">
           <Addtours></Addtours>
         </Route>
       </Switch>
         <Footers></Footers>
     </Router>
    </div>
  );
}

export default App;
