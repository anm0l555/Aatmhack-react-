import React,{ Component} from 'react';
import image1 from './img/brick-wall-1834784_1920.jpg'
import image2 from './img/platter-2009590_1920.jpg'
import image3 from './img/buffet-315691_1280.jpg'
import './landing.css';
import {Link} from 'react-router-dom';

class Landing extends Component {
    render(){
        return(
            <div className="landing">

            <nav class="transparent ind_nav" >
                    <div class="navbar-fixed">
                      <div class="nav-wrapper ">
                        <Link to="/landing" class="brand-logo center " id="brand-logo"><h1 class="ind_head">Restaurant Good Eats</h1></Link>
                      </div>
                    </div>
                    
            </nav>
              <div >
                <img src={image1} className="responsive-img ind_img" alt="" />
                 <div className="center ind_log">
              
                 <Link to="../login" className="waves-effect waves-light  transparent white-text btn-large" id="ind_log_btn">Login</Link>
                  <Link to="../signup" className="waves-effect waves-light transparent white-text btn-large" id="ind_log_btn">SignUp</Link>

            
               </div>
               </div>
      


    
    <section id="about" className="ind_about">
      <div className="container">

        <div className="row">
          <div className="col s12 l6 " >
            <img src={image2} className=" responsive-img left" alt="" />
          </div>
          <div className="col s12 l6  " >
            <h3 className="ind_head">About Us </h3>
            <p className="about_index">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>


          


          
        </div>


        

        <div className="row">
          <div className="col s12 l6 content left" >
            
            <p className="abt_ind_2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>

          <div className="col s12 l6 " >
            <img src={image3} className=" responsive-img left" alt="" />
          </div>
        </div>

      </div>
    </section>
    
    
      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2014 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
            </div>    
        );
    }
}


export default Landing;