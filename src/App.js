import logo from './logo.svg';
import './App.css';
import Header from './Common/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './HomePage/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import PlaceBook from './Component/PlaceBook/PlaceBook';



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>        
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
         
          <Route path="/placebook/:serviceId">
              <PlaceBook></PlaceBook>
            </Route>
          <PrivetRoute path='/dashboard'>
              <Dashboard></Dashboard>             
            </PrivetRoute>       
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>  
      </BrowserRouter>
    </AuthProvider>

    </div>
  );
}

export default App;
