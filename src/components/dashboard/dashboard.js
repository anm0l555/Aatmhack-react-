import React , { Component } from 'react';
import {Link}  from 'react-router-dom';
import  image1  from "./img/kitchen-731351.jpg";
import image2  from "./img/person1.jpg";
import Table from './table';
import  './dashboard.css';
import Dailyincome from './income';
import Dailybill from '../bill/dailybill';


class Dashboard extends Component {
    
    render(){
        return(
            <div className=" Dashboard">
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
                    
                      
                      
                      <li><Link className="waves-effect" to="/menu"><i className="material-icons">create</i>Edit Menu</Link></li>
                      <li><div className="divider "></div></li>
                      
          
                      <li><a className="header">Account Controls</a></li>            
                      
                      <li><Link className="waves-effect" to="/"><i className="material-icons">arrow_back</i>Logout</Link></li>
                      <li><div className="divider "></div></li>
                </ul>
              </nav>
        
                
              <div className="dash_land_img">
                  <h2 className="white-text ">Dashboard...</h2>
              </div>
    
          
              < Dailyincome />
            <div >
            <h2 className="dash_h_tab">Tables...</h2>
            <div className="divider black"></div>
            </div>
            < Table />
    
    
        
            </div>
        );
    }
}


export default Dashboard;