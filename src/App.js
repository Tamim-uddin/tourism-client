import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Addtours from './Pages/Addtours/Addtours';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
     <AuthProvider>
       <Router>
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
            <PrivateRoute path="/bokking/:_id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
