import React, { Component } from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';
class Dailyincome extends Component {
    render(){
        return(
            <div className="Dailyincome">
              <div className="row">
                <div className="col s12 m6 l3">
                  <div className="card   " id="dashboardcard1" >
                      <h6 ><Link to="/dailybill" className="black-text">Daily Income</Link></h6>
                      <div className="row">
                      <div className="col s9 m9 l9">
                        <h5><span>4500k</span></h5>
                      </div>    
                      
                      </div>
                  </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="card   " id="dashboardcard1" >
                        <h6 > <Link to="/weeklybill" className="black-text">Weekly Income</Link></h6>
                        <div className="row">
                        <div className="col s9 m9 l9">
                          <h5><span>4500k</span></h5>
                        </div>    
                        
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                  <div className="card  " id="dashboardcard1"  >
                      <h6 ><Link to="/monthlybill" className="black-text">Monthly Income</Link></h6>
                    <div className="row">
                      <div className="col s9 m9 l9">
                        <h5><span>2500k</span></h5>
                      </div>    
                      
                    </div>
                  </div>
                </div>
          
              </div>
            </div>
        );
    }
}

export default Dailyincome;