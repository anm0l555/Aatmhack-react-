import React,{ Component } from 'react';
import './dashboard.css';
import  image  from "./img/qr-code-148732_640.png";


class Tablefree extends Component {
    render(){
        return(
            <div className="table">
                <div className="row">
                    
            
                    <div className="col s12 m6 l4">
                    <div className="card dash_card2">
                        <div className="card-title center">
                        <a href="#" className="left red-text tooltipped  circle" data-tooltip="I am a tooltip"><i className="far fa-bell"></i></a>
                        <img src={image} className="right dash_qrimg" alt="here is qr code " /><br/>
                        <br/>
                        <i className="fas fa-utensils large amber-text"></i>
            
                            <br/><br/>
                            
                            <a href="#"><h3>Table 2</h3></a>
                            
                        </div>
                        <div className="card-content center">
                            
                            <h5 className="green-text">Free</h5>
                            
                            
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        );
    }
}


export default Tablefree;