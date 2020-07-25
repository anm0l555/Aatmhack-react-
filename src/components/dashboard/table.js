import React,{ Component } from 'react';
import './dashboard.css';
import  image  from "./img/qr-code-148732_640.png";


class Table extends Component {
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
                            
                            <h5 className="red-text">Occupied</h5>
                            <p > <b>Current Order :</b> <a href="#modal1" className="modal-trigger">#123456gr</a></p>
                            <p > <b>Total Amount :</b> Rs.1234/-</p>
            
                            
                        </div>
                    </div>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                    <h4 className="center">Table 2</h4>
                    <h5>New Orders</h5><div className="divider black"></div><br/>
                    <div className="row">
                        <div className="col s12">
                        <table>
                            <tbody>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Mark it Done!</th>
                            </tr>
                            <tr>
                                
                                <td>English Br/eakfast</td>
                                <td>1</td>
                                <td>Rs.1234</td>
                                <td><form action="#"><p><label ><input type="checkbox" /><span></span></label></p></form></td>
                            </tr>
                            <tr>
                                
                                <td>English Br/eakfast</td>
                                <td>2</td>
                                <td>Rs.234</td>
                                <td><form action="#"><p><label ><input type="checkbox" /><span></span></label></p></form></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <br/>
                    <h5>Delivered</h5>
                    <div className="divider black"></div><br/>
                    <div className="row">
                        <div className="col s12">
                        <table>
                            <tbody>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            
                            </tr>
                            <tr>
                                
                                <td>English Br/eakfast</td>
                                <td>1</td>
                                <td>Rs 1234</td>
                            </tr>
                            <tr>
                                
                                <td>English Br/eakfast</td>
                                <td>2</td>
                                <td>Rs 234</td>
                            </tr>
                            <tr>
                                <th>Total Bill</th>
                                <th></th>
                                <th>Rs 3456</th>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            
                </div>
            </div>
        );
    }
}


export default Table;