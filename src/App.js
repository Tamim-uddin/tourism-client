import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Header/Header';

import Addtours from './Pages/Addtours/Addtours';
import Footers from './Pages/Footers/Footers';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageEvent from './Pages/ManageEvent/ManageEvent';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <AuthProvider>
       <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addtours">
              <Addtours></Addtours>
            </Route>
            <PrivateRoute path="/bokking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/manageevents">
              <ManageEvent></ManageEvent>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
            <Footers></Footers>
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
