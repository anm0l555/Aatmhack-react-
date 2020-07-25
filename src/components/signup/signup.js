import React , {Component } from 'react';
import './signup.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    state = {
        username:null,
        email:null,
        password1:null,
        password2:null,
        name:null,
        description:null,
        address:null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleClick= async() => {
        console.log(this.state);
        try{
            const res1 = await axios.post('http://parthsujalshah1.pythonanywhere.com/api/user/rest-auth/registration/',JSON.stringify({username:this.state.username, password1: this.state.password1, password2: this.state.password2, email: this.state.email}),{"headers":{'Content-Type':'application/json'}});
            console.log(res1)
            const key = res1.data.key;
            const token = `Token ${key}`;
            localStorage.setItem("Authorization",JSON.stringify(token));
            const res2 = await axios.post('http://parthsujalshah1.pythonanywhere.com/api/restaurant/restaurant/',JSON.stringify({description: this.state.description, address: this.state.address, name: this.state.name}),{"headers":{'Content-Type':'application/json', 'Authorization':`${token}`}});
            console.log(res2);
        }catch(e){
            console.log(e);
        }
    }
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
                                        <input id="username" type="text" className="validate" onChange={this.handleChange} />
                                        <label for="username">Username</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" onChange={this.handleChange} />
                                    <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="name" type="text" className="validate" onChange={this.handleChange} />
                                        <label for="name">Restaurant Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="description" type="text" className="validate" onChange={this.handleChange} />
                                        <label for="description">Description</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="address" type="text" className="validate" onChange={this.handleChange} />
                                        <label for="address">Location</label>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input id="password1" type="password" className="validate" onChange={this.handleChange} />
                                    <label for="password1">Password</label>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="password2" type="password" className="validate" onChange={this.handleChange} />
                                    <label for="password2">Confirm Password</label>
                                    </div>
                                </div>
                                
                                <Link to="/login" className="waves-effect waves-light btn black" onClick={this.handleClick}>SignUp</Link>
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