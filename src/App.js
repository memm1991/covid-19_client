import axios from "axios";
import { BrowserRouter,Route } from 'react-router-dom';
import{UserProvider} from './authContext'
import Login from "./components/Login";
import Signup from "./components/Singup";
import Landing from "./components/Landing";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

function App() {
 
  return (
    <UserProvider>
      <BrowserRouter>
      <Route path={'/'} component={Navbar}/>
      <Route exact path={'/login'} component={Login}/>
      <Route exact path={'/singup'} component={Signup}/>
      <Route exact path={'/Landing'} component={Landing}/>
      <Route exact path={'/details/:countryId'} component={Details}/>
      </BrowserRouter>

    </UserProvider>
  );
}

export default App;
