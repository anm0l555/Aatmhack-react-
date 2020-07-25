import React , {Component } from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    state = {
        username:null,
        email:null,
        password:null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleClick= () => {
        axios.post('http://parthsujalshah1.pythonanywhere.com/api/user/rest-auth/login/',JSON.stringify(this.state),{"headers":{
            'Content-Type':'application/json'
        }}).then((res)=>{
            const key = res.data.key;
            const token = `Token ${key}`;
            localStorage.setItem("Authorization",JSON.stringify(token));
        }).catch(e=>{console.log(e)});
    }
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
                                    <input id="username" type="text" className="validate" onChange={this.handleChange}/>
                                    <label for="username">Username</label>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                                    <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                                    <label for="password">Password</label>
                                </div>
                                </div>
                                
                                <Link to="/dashboard" className="waves-effect waves-light btn black" onClick={this.handleClick}>SignIn</Link>
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