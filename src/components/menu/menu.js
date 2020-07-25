import React,{Component} from 'react';
import image from './kitchen-731351.jpg';
import person from './person1.jpg';
import platter from './platter-2009590_1920.jpg';
import './menu.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Menu extends Component {
    state = {
        category:null,
        title:null,
        description:null,
        price:null,
    }
    handleClick = () => {
        const myheaders = {headers:{'Content-Type':"application/json;charset=UTF-8",'Authorization':"Token e5bb2dd91c1e8f2fa7eb4c7fd5410d0883a847ac"}}
        console.log(this.state);
        axios.post('http://parthsujalshah1.pythonanywhere.com/api/food/food/3/2/',this.state,myheaders)
        .then(res=> {
            console.log(res);
        }).catch((e)=> console.log(e));
        
    }

     onChange = (e) => {
        
        this.setState({
            [e.target.id]:e.target.value
        })
       
    }
    
    
    render(){
        return(
            <div className="Menu">
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
                                    <img src={image} className="responsive-img center" />
                                </div>
                                <a href="#!user"><img className="circle " src={person} /></a>
                                <a href="#!name"><span className="white-text name">John Doe</span></a>
                                <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                            </div>
                            
                        </li>
                        
                        
                        <li><Link to="/dashboard" className="waves-effect" ><i className="material-icons">dashboard</i>Dashboard</Link></li>
                        <li><div className="divider "></div></li>
                        
                        
            
                        <li><a className="header">Account Controls</a></li>            
                        
                        <li><Link className="waves-effect" to="/"><i className="material-icons">arrow_back</i>Logout</Link></li>
                        <li><div className="divider "></div></li>
                    </ul>
                </nav>

                <div className="menu_bkg">
                    <a className="waves-effect waves-light btn modal-trigger transparent" id="menu_editbtn" href="#modal1">Create Menu</a>
                </div>



                
            <div id="modal1" className="modal">
                <div className="modal-content">
                <h4>Choose your menu</h4>
                <div className="row">
                    <div className="input-field col s12" >
                        <select id="category" onChange={this.onChange}>
                        <option value="None" disabled selected>Choose your option</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dessert">Dessert</option>
                        </select>
                        <label>Chose your category</label>
                    </div>
                </div>
                <div className="row">
                    <form className="col s12" onSubmit={this.onSubmit}>
                        

                    <div className="row">
                        <div className="input-field col s12" onChange={this.onChange}>
                        <input placeholder="Title" id="title" type="text" className="validate" />
                        
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12" onChange={this.onChange}>
                            <textarea id="description" className="materialize-textarea"></textarea>
                            <label for="description">Description</label>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12" onChange={this.onChange}>
                        <input placeholder="Amount" id="price" type="text" className="validate" />
                        
                        </div>
                        
                    </div>
                    <div className="row">
                        
                            <div className="file-field input-field" onChange={this.onChange}>
                            <div className="btn">
                                <span>File</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" placeholder="image" type="text" />
                            </div>
                            </div>
                        
                        
                    </div>
                    
                    

                    
                    </form>
                </div>
                </div>
                <div className="modal-footer">
                <a href="#!" onClick={this.handleClick} className=" waves-effect waves-green btn-flat">Save</a>
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">close</a>
                </div>
            </div>

            



            <br/>
            <div className="row menu_tabs">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3"><a href="#test1" className="black-text ">Breakfast</a></li>
                        <li className="tab col s3"><a className="active black-text" href="#test2">Lunch</a></li>
                        <li className="tab col s3"><a href="#test3" className="black-text">Dinner</a></li>
                        <li className="tab col s3"><a href="#test4" className="black-text">Dessert</a></li>
                        
                    </ul>
                </div>
                <div id="test1" className="col s12">
                    <div className="row">
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                    <div className="card-image">
                                        <img src={platter} className="menu_cardimg" />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content" id="menu_cards">
                                            <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                            <h6>Rs 18.9</h6>
                                            <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                        </div>
                                    </div> 
                            </div>
                        </div>
                            

                        
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg" />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                        
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                            

                    </div>
                </div>
                    
                
                <div id="test2" className="col s12">
                    <div className="row">
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            

                        
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                        
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                    </div>
                </div>
                
                <div id="test3" className="col s12">
                    <div className="row">
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                        
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                        
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                
                <div id="test4" className="col s12">
                    <div className="row">
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                        
                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                        <div className="col s6 ">
                            
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={platter} className="menu_cardimg"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" id="menu_cards">
                                        <h5>English Breakfast <p className="right"><a href="#modal2" className="modal-trigger"><i className="material-icons green-text">edit</i></a><a href="#"><i className="material-icons red-text">delete</i></a></p></h5>
                                        
                                        <h6>Rs 18.9</h6>
                                        <p className="grey-text">I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                    </div>
                </div>
            </div>
            
                
            <div id="modal2" className="modal">
                <div className="modal-content">
                <h4>Choose your menu</h4>
                
                <div className="row">
                    <form className="col s12">
                        

                    <div className="row">
                        <div className="input-field col s12">
                        <input placeholder="Title" id="title" type="text" className="validate" />
                        
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label for="textarea1">Description</label>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input placeholder="Amount" id="amount" type="text" className="validate" />
                        
                        </div>
                        
                    </div>
                    <div className="row">
                        <form action="#">
                            <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" placeholder="image" type="text" />
                            </div>
                            </div>
                        </form>
                        
                    </div>
                    
                    

                    
                    </form>
                </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className=" waves-effect waves-green btn-flat">Save</a>
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">close</a>
                </div>
            </div>
        </div>  
        );
    }
}

export default Menu;