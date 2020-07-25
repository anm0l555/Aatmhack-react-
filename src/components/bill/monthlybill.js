import React, {Component} from 'react';
import './bill.css';
import image1 from "./kitchen-731351.jpg";
import image2 from "./person1.jpg";
import {Link} from 'react-router-dom';

class Monthlybill extends Component {
    render(){
        return(
            <div className="Monthlybill">
                    <nav className="log_nav transparent " >
                        <div className="navbar-fixed">
                            <div className="nav-wrapper ">
                                <a href="#!" className="brand-logo center black-text">Flavor Grills</a>
                                <ul id="nav-mobile " className="right" >
                                    <li><a href="#"data-target="slide-out"  className=" sidenav-trigger show-on-large black-text right"><i className="material-icons">menu</i></a></li>

                                </ul>
                                
                            </div>
                        </div>

                        <ul id="slide-out" className="sidenav">
                            <li>
                                <div className="user-view">
                                    <div className="background">
                                        <img src={image1} className="responsive-img center" />
                                    </div>
                                    <a href="#!user"><img className="circle " src={image2} /></a>
                                    <a href="#!name"><span className="white-text name">John Doe</span></a>
                                    <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                                </div>
                                
                            </li>
                            
                            <li><Link to="/dashboard" className="waves-effect" ><i className="material-icons">dashboard</i>Dashboard</Link></li>
                            <li><div className="divider"></div></li>
                            
                            <li><Link className="waves-effect" to="/menu"><i className="material-icons">create</i>Edit Menu</Link></li>
                            <li><div className="divider "></div></li>
                            
                
                            <li><a className="header">Account Controls</a></li>            
                            
                            <li><Link className="waves-effect" to="/"><i className="material-icons">arrow_back</i>Logout</Link></li>
                            <li><div className="divider "></div></li>
                        </ul>
                    </nav>


                    
                    <div className="center">
                        <h4>Bill History</h4>

                        <div className="row">
                            <div className="input-field col s4 offset-s4 " id="month_input-field">
                                <select>
                                <option value="" disabled selected>Select Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                    
                                </select>
                            
                            </div>
                        </div>
                    </div>
                    <div className="billtable">
                        <div className="row">
                            
                                <table className="striped">
                                    <tbody>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>Order ID</th>
                                            <th>Date & Time</th>
                                            <th>Bill Amount</th>
                                            <th className="center">E-Bill</th>
                                        </tr>
                                        <tr>
                                            <td>1.</td>
                                            <td>#12344</td>
                                            <td>22-07-2019 <br/> 19:08 pm</td>
                                            <td>Rs. 1223</td>
                                            <td className="center"><a href="#">Link to e-bill</a> <br/><a href="#" className="btn black"> Download PDF</a>&nbsp;<a href="#" className=" btn black">Print</a></td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>#12344</td>
                                            <td>22-07-2019 <br/> 19:08 pm</td>
                                            <td>Rs. 1223</td>
                                            <td className="center"><a href="#">Link to e-bill</a> <br/><a href="#" className="btn black"> Download PDF</a>&nbsp;<a href="#" className=" btn black">Print</a></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <th>Total Amount</th>
                                            <td></td>
                                            <th>Rs.12233</th>
                                        </tr>
                                    </tbody>
                                </table>
                            
                        </div>
                    </div>
            </div>
        );
    }
}


export default Monthlybill;