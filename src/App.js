import React,{ Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 

import  Landing  from '../src/components/landing/landing';
import Login from '../src/components/login/login';
import Signup from '../src/components/signup/signup';
import Dashboard from '../src/components/dashboard/dashboard'
import Dailybill from '../src/components/bill/dailybill';
import Weeklybill from '../src/components/bill/weeklybill';
import Monthlybill from '../src/components/bill/monthlybill';
import Menu from '../src/components/menu/menu';
import { BrowserRouter , Route } from 'react-router-dom';


class App extends Component{
  componentDidMount(){
    M.AutoInit();
  }
  render(){
    return(
      <div className="App">
        
        <BrowserRouter>

          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
          <Route  path='/dailybill' component={Dailybill} />
          <Route  path='/weeklybill' component={Weeklybill} />
          <Route  path='/monthlybill' component={Monthlybill} />
          <Route  path='/menu' component={Menu} />
          
          
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
