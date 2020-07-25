import React , {Component } from 'react';
import './login.css';
import {Link} from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div className="Login">
                
                <nav className="log_nav transparent " >
                    <div className="navbar-fixed">
                    <div className="nav-wrapper ">
                        <Link to="/" className="brand-logo center black-text">Restaurant Good Eats</Link>
                    </div>
                    </div>
                    
                </nav>

                
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <div className="center signin">
                            <h2>SignIn</h2>
                            <form className="col s12">
                                
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                    <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" />
                                    <label for="password">Password</label>
                                </div>
                                </div>
                                
                                <Link to="/dashboard" className="waves-effect waves-light btn black">SignIn</Link>
                                <p>Don't have an account ?&nbsp; <Link to="/signup">Signup</Link></p>
                                
                                <br />
                                <div className="row" id="log_row">
                                    <div className="col s3 divider black"></div>
                                    <div className="col s6 log_or  "><h5 >or signin with</h5></div>
                                    <div className="col s3 divider black"></div>
                                </div>
                                <Link to="#" className="center goo_icon_sign btn red "><i className="fab fa-google-plus medium  white-text"></i>&nbsp; Google</Link> 
                                <Link to="#" className="center fac_icon_sign btn blue "><i className="fab fa-facebook medium white-text "></i>&nbsp; Facebook</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}


export default Login;