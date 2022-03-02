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
import Addreviews from './Pages/Addreviews/Addreviews';
import Makeadmin from './Pages/Makeadmin/Makeadmin';
import AdminRoute from './Pages/AdminRoute/AdminRoute';


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
            <AdminRoute path="/addtours">
              <Addtours></Addtours>
            </AdminRoute>
            <Route path="/addreviews">
              <Addreviews></Addreviews>
            </Route>
            <AdminRoute path="/makeadmin">
              <Makeadmin></Makeadmin>
            </AdminRoute>
            <PrivateRoute path="/bokking/:_id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <AdminRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
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
