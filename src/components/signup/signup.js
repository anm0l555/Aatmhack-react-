import React , {Component } from 'react';
import './signup.css';
import {Link} from 'react-router-dom';

class Signup extends Component {
    render(){
        return(
            <div className="Signup">
        
                <nav className="log_nav transparent " >
                    <div className="navbar-fixed">
                    <div className="nav-wrapper ">
                        <Link to="#!" className="brand-logo center black-text">Restaurant Good Eats</Link>
                    </div>
                    </div>
                    
                </nav>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <div className="center signin">
                            <h2>SignUp</h2>
                            <form className="col s12">
                                
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="last_name" type="text" className="validate" />
                                        <label for="last_name">Username</label>
                                    </div>
                                </div>
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
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="confirmpassword" type="password" className="validate" />
                                    <label for="password">Confirm Password</label>
                                    </div>
                                </div>
                                
                                <Link to="/login" className="waves-effect waves-light btn black">SignUp</Link>
                                <p>Already have an account ?&nbsp; <Link to="/login">Signin</Link></p>
                                
                                <br/>
                                <div className="row" id="log_row">
                                    <div className="col s3 divider black"></div>
                                    <div className="col s6 log_or  "><h5 >or signup with</h5></div>
                                    <div className="col s3 divider black"></div>
                                </div>  

                                <Link to="#" className="center  btn red "><i className="fab fa-google-plus medium  white-text"></i>&nbsp; Google</Link> 
                            <Link to="#" className="center  btn blue "><i className="fab fa-facebook medium white-text "></i>&nbsp; Facebook</Link>
                            </form>
                        </div>
                    </div>
             
            </div>
            </div>
   
               
   
        );
    }
}


export default Signup;